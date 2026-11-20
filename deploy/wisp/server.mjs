// Servidor Wisp para la red de Eclipse OS en el navegador (live/net.js).
//
// Cada conexión TCP que abre el Eclipse de la página llega aquí como un stream
// de Wisp, y este proceso la abre de verdad hacia Internet. Escucha solo en
// 127.0.0.1: nginx es quien lo publica en /wisp/ (ver deploy/nginx-live.conf).
//
// Las restricciones (puertos, IPs privadas, límites) están en config.json, que
// tiene el mismo formato que `wisp.options` de @mercuryworkshop/wisp-js.
//
//   node server.mjs [config.json] [puerto]

import http from 'node:http';
import fs from 'node:fs';
import { server as wisp, logging } from '@mercuryworkshop/wisp-js/server';

const configPath = process.argv[2] || new URL('config.json', import.meta.url);
const port = Number(process.argv[3] || process.env.WISP_PORT || 5001);

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
logging.set_level(logging[config.log_level || 'WARN']);
delete config.log_level;
Object.assign(wisp.options, config);

const srv = http.createServer((req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Eclipse OS: solo Wisp\n');
});

// Solo Wisp (rutas acabadas en /). Las otras rutas serían wsproxy, que aquí no
// se usa.
srv.on('upgrade', (req, socket, head) => {
  if (!new URL(req.url, 'http://x').pathname.endsWith('/')) return socket.destroy();
  wisp.routeRequest(req, socket, head);
});

srv.listen(port, '127.0.0.1', () => console.log(`eclipse-wisp: 127.0.0.1:${port}`));
