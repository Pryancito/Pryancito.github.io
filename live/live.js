// Eclipse OS en el navegador: el núcleo riscv64 de Eclipse arrancado en
// qemu-system-riscv64 compilado a WebAssembly (qemu-wasm), con la consola serie
// en una terminal xterm.js que ocupa toda la ventana. Arranca solo al abrir la
// página; lo que pasa antes de QEMU (descargas, errores) se escribe en la misma
// terminal. La página en inglés (/en/live/) usa este fichero; los textos salen
// de los data-msg-* de <body>.
//
// Lo que se descarga está en emu/manifest.json, que escribe
// scripts/live-web/build.sh del repositorio de Eclipse.

const here = new URL('.', import.meta.url);
const termEl = document.getElementById('term');

const msg = (key, vars = {}) =>
  (document.body.dataset['msg' + key[0].toUpperCase() + key.slice(1)] || key)
    .replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

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

// Sin xterm.js (no ha cargado) el aviso va en texto plano a la página.
function plainError(text) {
  termEl.textContent = text;
  termEl.classList.add('live-plain');
}

async function boot() {
  try {
    await loadScript(new URL('vendor/xterm.js', here));
    await loadScript(new URL('vendor/xterm-addon-fit.js', here));
    await loadScript(new URL('vendor/xterm-pty.js', here));
  } catch (e) {
    plainError(msg('error', { why: e.message }));
    return;
  }

  const xterm = new Terminal({
    fontFamily: 'ui-monospace, "Cascadia Mono", "DejaVu Sans Mono", Menlo, Consolas, monospace',
    fontSize: window.innerWidth < 640 ? 11 : 14,
    theme: { background: '#000000', foreground: '#ddd5f7', cursor: '#ffd36e' },
    cursorBlink: true,
  });
  const fit = new FitAddon.FitAddon();
  xterm.loadAddon(fit);
  xterm.open(termEl);
  fit.fit();
  window.addEventListener('resize', () => fit.fit());
  xterm.focus();

  const dim = (s) => `\x1b[2m${s}\x1b[0m`;
  const line = (s) => xterm.write(s + '\r\n');

  const why = supportProblem();
  if (why) { line(msg('unsupported', { why })); return; }

  try {
    const manifest = await (await fetch(new URL('emu/manifest.json', here))).json();
    const files = {};
    for (const f of manifest.files) {
      let shown = -1;
      files[f.path] = await fetchBytes(f, (got) => {
        const pct = Math.min(99, Math.floor(100 * got / f.size));
        if (pct !== shown) { shown = pct; xterm.write('\r' + dim(msg('download', { file: f.label, pct: pct + ' %' })) + '\x1b[K'); }
      });
      xterm.write('\r' + dim(msg('download', { file: f.label, pct: '100 %' })) + '\x1b[K\r\n');
    }
    line(dim(msg('booting')));

    // La salida llega a trozos (a veces byte a byte), así que se mira con una
    // ventana de los últimos bytes: /etc/profile mide la terminal con
    // \e[999;999H\e[6n y luego vuelve a \e[H para pintar el logo; en una
    // pantalla llena de mensajes de arranque el logo saldría encima de ellos,
    // así que se borra la pantalla ahí.
    const probe = '\x1b[999;999H';
    let tail = '';
    const write = xterm.write.bind(xterm);
    xterm.write = (data, cb) => {
      const text = typeof data === 'string' ? data.slice(-32) : String.fromCharCode(...data.slice(-32));
      tail = (tail + text).slice(-32);
      write(data, cb);
      if (tail.includes(probe)) { write('\x1b[2J\x1b[3J'); tail = ''; }
    };

    const { master, slave } = openpty();
    xterm.loadAddon(master);

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
      onExit: () => write('\r\n' + dim(msg('stopped')) + '\r\n'),
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
    line('\r\n' + msg('error', { why: e.message || String(e) }));
  }
}

boot();
