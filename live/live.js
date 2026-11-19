// Eclipse OS en el navegador: el núcleo riscv64 de Eclipse arrancado en
// qemu-system-riscv64 compilado a WebAssembly (qemu-wasm), con la consola serie
// en una terminal xterm.js. La página en inglés (/en/live/) usa este mismo
// fichero; los textos salen de los data-msg-* de #live.
//
// Lo que se descarga está en emu/manifest.json, que escribe
// scripts/live-web/build.sh del repositorio de Eclipse.

const here = new URL('.', import.meta.url);
const root = document.getElementById('live');
const statusEl = document.getElementById('status');
const power = document.getElementById('power');
const cover = document.getElementById('cover');
const termEl = document.getElementById('term');

const msg = (key, vars = {}) =>
  (root.dataset['msg' + key[0].toUpperCase() + key.slice(1)] || key)
    .replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
const say = (key, vars) => { statusEl.textContent = msg(key, vars); };

const mib = (n) => {
  const v = n / (1024 * 1024);
  return (v >= 10 ? Math.round(v) : v.toFixed(1)).toString().replace('.', document.documentElement.lang === 'es' ? ',' : '.') + ' MB';
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error(src));
    document.head.appendChild(s);
  });
}

// Descarga con progreso; si el fichero termina en .gz se descomprime aquí.
async function fetchBytes(file, onProgress) {
  const res = await fetch(new URL(file.url, here));
  if (!res.ok || !res.body) throw new Error(`${file.url}: HTTP ${res.status}`);
  let got = 0;
  const counted = res.body.pipeThrough(new TransformStream({
    transform(chunk, ctl) { got += chunk.byteLength; onProgress(got); ctl.enqueue(chunk); },
  }));
  const body = file.url.endsWith('.gz') ? counted.pipeThrough(new DecompressionStream('gzip')) : counted;
  return new Uint8Array(await new Response(body).arrayBuffer());
}

function supportProblem() {
  if (typeof WebAssembly !== 'object') return 'WebAssembly';
  if (typeof DecompressionStream !== 'function') return 'DecompressionStream';
  if (typeof SharedArrayBuffer !== 'function' || !self.crossOriginIsolated) return msg('isolation');
  return null;
}

let manifest;

async function init() {
  const why = supportProblem();
  if (why) { say('unsupported', { why }); return; }
  try {
    manifest = await (await fetch(new URL('emu/manifest.json', here))).json();
  } catch (e) {
    say('error', { why: e.message });
    return;
  }
  const total = manifest.files.reduce((n, f) => n + f.size, 0) + manifest.emulatorSize;
  say('ready', { size: mib(total) });
  power.disabled = false;
  power.addEventListener('click', boot, { once: true });
}

async function boot() {
  power.disabled = true;
  try {
    await loadScript(new URL('vendor/xterm.js', here));
    await loadScript(new URL('vendor/xterm-addon-fit.js', here));
    await loadScript(new URL('vendor/xterm-pty.js', here));

    const files = {};
    for (const f of manifest.files) {
      files[f.path] = await fetchBytes(f, (got) =>
        say('download', { file: f.label, pct: Math.min(99, Math.round(100 * got / f.size)) + ' %' }));
    }

    say('booting');
    const xterm = new Terminal({
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: window.innerWidth < 640 ? 11 : 14,
      theme: { background: '#000000', foreground: '#ddd5f7', cursor: '#ffd36e' },
      cursorBlink: true,
      convertEol: false,
    });
    const fit = new FitAddon.FitAddon();
    xterm.loadAddon(fit);
    const term = document.createElement('div');
    term.className = 'live-xterm';
    termEl.appendChild(term);
    xterm.open(term);
    fit.fit();
    window.addEventListener('resize', () => fit.fit());

    // La salida llega a trozos (a veces byte a byte), así que se mira con una
    // ventana de los últimos bytes:
    // - /etc/profile mide la terminal con \e[999;999H\e[6n y luego vuelve a
    //   \e[H para pintar el logo; en una pantalla llena de mensajes de arranque
    //   el logo saldría encima de ellos, así que se borra la pantalla ahí;
    // - el primer «/ # » es el intérprete de órdenes: la máquina ya está lista.
    const probe = '\x1b[999;999H';
    let tail = '';
    let running = false;
    const write = xterm.write.bind(xterm);
    xterm.write = (data, cb) => {
      const text = typeof data === 'string' ? data.slice(-32) : String.fromCharCode(...data.slice(-32));
      tail = (tail + text).slice(-32);
      write(data, cb);
      if (tail.includes(probe)) { write('\x1b[2J\x1b[3J'); tail = ''; }
      if (!running && tail.includes('/ # ')) {
        running = true;
        cover.hidden = true;
        say('running');
        xterm.textarea?.focus({ preventScroll: true });
      }
    };

    const { master, slave } = openpty();
    xterm.loadAddon(master);

    cover.classList.add('live-cover-booting');

    const emuUrl = new URL(manifest.emulator, here).href;
    const { default: initQemu } = await import(emuUrl);
    const Module = {
      arguments: manifest.arguments,
      pty: slave,
      mainScriptUrlOrBlob: emuUrl,
      locateFile: (p) => new URL('emu/' + p, here).href,
      preRun: [(mod) => {
        mod.FS.mkdir('/pack');
        for (const [path, bytes] of Object.entries(files)) mod.FS.writeFile(path, bytes);
      }],
      onExit: () => { cover.hidden = false; say('stopped'); },
    };
    const instance = await initQemu(Module);

    // Como en el ejemplo de qemu-wasm: que el poll de la TTY no bloquee mientras
    // la pty no tiene nada que leer.
    const tty = instance.TTY || Module.TTY;
    const oldPoll = tty.stream_ops.poll;
    tty.stream_ops.poll = function (stream, timeout) {
      if (!slave.readable) return (slave.readable ? 1 : 0) | (slave.writable ? 4 : 0);
      return oldPoll.call(stream, timeout);
    };
  } catch (e) {
    console.error(e);
    cover.hidden = false;
    say('error', { why: e.message || String(e) });
  }
}

init();
