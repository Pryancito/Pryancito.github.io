// Red para Eclipse OS en el navegador.
//
// QEMU tiene una virtio-net con `-netdev socket,connect=eclipse-net:8888`. En
// Emscripten ese socket TCP es un WebSocket, así que aquí se sustituye
// window.WebSocket para esa dirección por un objeto que no sale del navegador:
// recibe las tramas Ethernet de QEMU (cada una con su longitud delante, 4 bytes
// big-endian) y se las da a la pila TCP/IP de v86 (vendor/v86-fake-network.js),
// que contesta ARP, DHCP, ping y NTP por su cuenta y resuelve DNS por DoH. Cada
// conexión TCP que abre Eclipse se convierte en un stream de Wisp hacia el
// servidor, que es quien conecta de verdad con Internet.
//
// Wisp: https://github.com/MercuryWorkshop/wisp-protocol (v1 y v2 sin
// extensiones). Solo TCP; UDP no sale del navegador.

import { create_eth_encoder_buf, handle_fake_networking } from './vendor/v86-fake-network.js';

export const QEMU_NET_HOST = 'eclipse-net:8888';
export const QEMU_NET_URL = `ws://${QEMU_NET_HOST}/`;

const ip4 = (s) => new Uint8Array(s.split('.').map(Number));
const mac = (s) => new Uint8Array(s.split(':').map((x) => parseInt(x, 16)));

// --- Cliente de Wisp --------------------------------------------------------

const PKT_CONNECT = 1, PKT_DATA = 2, PKT_CONTINUE = 3, PKT_CLOSE = 4, PKT_INFO = 5;
const CLOSE_VOLUNTARY = 0x02, CLOSE_NETWORK = 0x03;

function wispPacket(type, id, payload) {
  const p = new Uint8Array(5 + payload.length);
  p[0] = type;
  new DataView(p.buffer).setUint32(1, id, true);
  p.set(payload, 5);
  return p;
}

class WispClient {
  constructor(url, RealWebSocket) {
    this.url = url;
    this.RealWebSocket = RealWebSocket;
    this.ws = null;
    this.ready = false;        // ya llegó el CONTINUE inicial
    this.initialBuffer = 0;
    this.nextId = 1;
    this.streams = new Map();
  }

  // La conexión se abre con el primer stream y se vuelve a abrir si se cayó.
  connect() {
    if (this.ws) return;
    const ws = this.ws = new this.RealWebSocket(this.url);
    ws.binaryType = 'arraybuffer';
    ws.onmessage = (e) => this.onPacket(new Uint8Array(e.data));
    ws.onclose = ws.onerror = () => {
      if (this.ws !== ws) return;
      this.ws = null;
      this.ready = false;
      for (const s of [...this.streams.values()]) this.finish(s, CLOSE_NETWORK);
    };
  }

  open(host, port, onData, onClose) {
    const s = { id: this.nextId++, host, port, onData, onClose, credit: 0, queue: [], sentConnect: false };
    this.streams.set(s.id, s);
    this.connect();
    if (this.ready) this.sendConnect(s);
    return {
      send: (data) => {
        if (!this.streams.has(s.id)) return;
        s.queue.push(data.slice());
        this.flush(s);
      },
      close: () => {
        if (!this.streams.has(s.id)) return;
        this.streams.delete(s.id);
        if (s.sentConnect && this.ready) this.ws.send(wispPacket(PKT_CLOSE, s.id, [CLOSE_VOLUNTARY]));
      },
    };
  }

  sendConnect(s) {
    const host = new TextEncoder().encode(s.host);
    const payload = new Uint8Array(3 + host.length);
    payload[0] = 1;                                   // TCP
    new DataView(payload.buffer).setUint16(1, s.port, true);
    payload.set(host, 3);
    this.ws.send(wispPacket(PKT_CONNECT, s.id, payload));
    s.sentConnect = true;
    s.credit = this.initialBuffer;
    this.flush(s);
  }

  flush(s) {
    if (!s.sentConnect) return;
    while (s.queue.length && s.credit > 0) {
      this.ws.send(wispPacket(PKT_DATA, s.id, s.queue.shift()));
      s.credit--;
    }
  }

  finish(s, reason) {
    if (!this.streams.delete(s.id)) return;
    s.onClose(reason);
  }

  onPacket(p) {
    if (p.length < 5) return;
    const view = new DataView(p.buffer, p.byteOffset, p.byteLength);
    const id = view.getUint32(1, true);
    const s = this.streams.get(id);
    switch (p[0]) {
      case PKT_INFO:
        // Wisp v2: el servidor espera nuestro INFO (versión 2.0, sin extensiones).
        this.ws.send(wispPacket(PKT_INFO, 0, [2, 0]));
        break;
      case PKT_CONTINUE: {
        const remaining = view.getUint32(5, true);
        if (id === 0) {
          const first = !this.ready;
          this.initialBuffer = remaining;
          this.ready = true;
          if (first) for (const st of this.streams.values()) if (!st.sentConnect) this.sendConnect(st);
        } else if (s) {
          s.credit = remaining;
          this.flush(s);
        }
        break;
      }
      case PKT_DATA:
        if (s) s.onData(p.subarray(5));
        break;
      case PKT_CLOSE:
        if (s) this.finish(s, p[5]);
        break;
    }
  }
}

// Con `NETDEBUG = true` en la consola del navegador se ve cada trama (para depurar).
function fdesc(f) {
  const et = (f[12] << 8) | f[13];
  if (et !== 0x800) return 'eth ' + et.toString(16) + ' len ' + f.length;
  const ihl = (f[14] & 15) * 4, proto = f[23], ip = f.subarray(14), l4 = ip.subarray(ihl);
  const tot = (ip[2] << 8) | ip[3];
  const src = [...ip.subarray(12, 16)].join('.'), dst = [...ip.subarray(16, 20)].join('.');
  if (proto === 6) {
    const dv = new DataView(l4.buffer, l4.byteOffset);
    const fl = l4[13], off = (l4[12] >> 4) * 4;
    const flags = ['F','S','R','P','A','U'].filter((_, i) => fl & (1 << i)).join('');
    return `tcp ${src}:${dv.getUint16(0)} > ${dst}:${dv.getUint16(2)} ${flags} seq ${dv.getUint32(4)} ack ${dv.getUint32(8)} win ${dv.getUint16(14)} len ${tot - ihl - off} framelen ${f.length}`;
  }
  return `ip ${proto} ${src} > ${dst} len ${tot}`;
}

// --- Adaptador para la pila de v86 ------------------------------------------
//
// Son los campos que lee fake_network.js (los mismos que WispNetworkAdapter de
// v86). La red es 192.168.86.0/24: el router es .1 y Eclipse recibe .100 por
// DHCP.

class Adapter {
  constructor(wisp, { dohServer, vmMac, deliver }) {
    this.wisp = wisp;
    this.deliver = deliver;
    this.router_mac = mac('52:54:00:01:02:03');
    this.router_ip = ip4('192.168.86.1');
    this.vm_ip = ip4('192.168.86.100');
    this.vm_mac = mac(vmMac);
    this.masquerade = true;
    this.dns_method = 'doh';
    this.doh_server = dohServer;
    this.mtu = 1500;
    this.eth_encoder_buf = create_eth_encoder_buf(this.mtu);
    this.tcp_conn = {};
    this.bus = { pair: { send() {} } };
  }

  // Trama de Eclipse hacia la red.
  send(frame) {
    if (globalThis.NETDEBUG) console.log('net: >', fdesc(frame));
    try { handle_fake_networking(frame, this); } catch (e) { console.warn('net:', e); }
  }

  // Trama hacia Eclipse. make_packet reutiliza su búfer: hay que copiarla.
  receive(frame) { if (globalThis.NETDEBUG) console.log('net: <', fdesc(frame)); this.deliver(new Uint8Array(frame)); }

  // Eclipse abre una conexión TCP: se abre un stream de Wisp al mismo destino.
  on_tcp_connection(conn, packet) {
    const stream = this.wisp.open(packet.ipv4.dest.join('.'), conn.sport,
      (data) => conn.write(data),
      () => conn.close());
    conn.on('data', (data) => { if (data.length) stream.send(data); });
    // Wisp no tiene medio cierre: un FIN de Eclipse cierra el stream entero.
    conn.on_close = conn.on_shutdown = () => stream.close();
    conn.accept();
    return true;
  }
}

// --- El "WebSocket" que ve QEMU ---------------------------------------------

class QemuSocket {
  constructor(adapter, url) {
    this.url = url;
    this.protocol = '';
    this.binaryType = 'arraybuffer';
    this.CONNECTING = 0; this.OPEN = 1; this.CLOSING = 2; this.CLOSED = 3;
    this.readyState = 0;
    this.onopen = this.onmessage = this.onclose = this.onerror = null;
    this.pending = new Uint8Array(0);
    this.adapter = adapter;
    adapter.deliver = (frame) => this.toQemu(frame);
    setTimeout(() => { this.readyState = 1; this.onopen?.({}); });
  }

  // Bytes de QEMU: se juntan y se cortan en tramas.
  send(data) {
    const chunk = ArrayBuffer.isView(data)
      ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength)
      : new Uint8Array(data);
    const buf = new Uint8Array(this.pending.length + chunk.length);
    buf.set(this.pending);
    buf.set(chunk, this.pending.length);
    let off = 0;
    while (buf.length - off >= 4) {
      const len = new DataView(buf.buffer, off, 4).getUint32(0);
      if (buf.length - off - 4 < len) break;
      this.adapter.send(buf.slice(off + 4, off + 4 + len));
      off += 4 + len;
    }
    this.pending = buf.slice(off);
  }

  toQemu(frame) {
    if (this.readyState !== 1) return;
    const out = new Uint8Array(4 + frame.length);
    new DataView(out.buffer).setUint32(0, frame.length);
    out.set(frame, 4);
    queueMicrotask(() => this.onmessage?.({ data: out.buffer }));
  }

  close() {
    if (this.readyState >= 2) return;
    this.readyState = 3;
    setTimeout(() => this.onclose?.({}));
  }
}

// Instala el WebSocket falso. Debe llamarse antes de arrancar QEMU.
export function setupNetwork({ wispUrl, dohServer = 'cloudflare-dns.com', vmMac = '52:54:00:12:34:56' }) {
  const RealWebSocket = window.WebSocket;
  const adapter = new Adapter(new WispClient(wispUrl, RealWebSocket), { dohServer, vmMac, deliver() {} });
  function WebSocket(url, protocols) {
    if (String(url) === QEMU_NET_URL) return new QemuSocket(adapter, QEMU_NET_URL);
    return new RealWebSocket(url, protocols);
  }
  WebSocket.prototype = RealWebSocket.prototype;
  Object.assign(WebSocket, { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 });
  window.WebSocket = WebSocket;
}
