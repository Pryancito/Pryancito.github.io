# Red de Eclipse OS en el navegador: servidor Wisp

La página `live/` arranca Eclipse en QEMU compilado a WebAssembly. Un navegador
no puede abrir conexiones TCP, así que la red de esa máquina sale por un
WebSocket con el protocolo [Wisp](https://github.com/MercuryWorkshop/wisp-protocol)
hasta este servidor, que es quien abre las conexiones de verdad.

```
Eclipse (virtio-net) → QEMU wasm → live/net.js (DHCP, ARP, DNS por DoH, TCP)
  → wss://…/wisp/ → nginx → server.mjs (127.0.0.1:5001) → Internet
```

Lo que hay dentro de la máquina: Eclipse recibe 192.168.86.100 por DHCP, con
192.168.86.1 de puerta de enlace y de DNS. El DNS lo contesta el navegador por
DoH (cloudflare-dns.com) y la hora (NTP) también. Solo sale TCP; UDP no.

## Instalarlo en el servidor (Debian)

Necesita Node.js 20 o más (`apt install nodejs npm` en Debian 13).

```sh
sudo mkdir -p /opt/eclipse-wisp
sudo cp server.mjs config.json package.json package-lock.json /opt/eclipse-wisp/
cd /opt/eclipse-wisp && sudo npm ci --omit=dev

sudo cp eclipse-wisp.service /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable --now eclipse-wisp

sudo cp nginx-http.conf /etc/nginx/conf.d/eclipse-wisp.conf
sudo cp nginx-proxy.conf /etc/nginx/snippets/eclipse-wisp-proxy.conf
sudo nginx -t && sudo systemctl reload nginx
```

`deploy/nginx-live.conf` ya incluye `eclipse-wisp-proxy.conf` en
`/live/wisp/` (y en `/wisp/` del bloque de `live.eclipse-os.dev`). La página
busca el servidor en `wisp/` al lado de `live.js`, así que vale para los dos.

Para comprobarlo, en la terminal de la página, cuando Eclipse ya tiene red
(tarda medio minuto más que el intérprete):

```sh
wget -O - http://example.com/
```

`journalctl -u eclipse-wisp` muestra los avisos del servidor. Con
`"log_level": "INFO"` en `config.json` se ve cada conexión que se abre.

## Qué se permite (config.json)

Es un proxy abierto hacia Internet para quien abra la página, así que va
recortado:

| Opción | Valor | Por qué |
| --- | --- | --- |
| `port_whitelist` | `[80, 443]` | Solo web. Nada de correo (25) ni de otros servicios. Se pueden añadir puertos, por ejemplo `22` o rangos como `[8000, 8100]`. |
| `allow_private_ips`, `allow_loopback_ips` | `false` | Que nadie llegue a la red interna del servidor ni a sus servicios locales. |
| `allow_udp_streams` | `false` | La página no usa UDP. |
| `stream_limit_total` | `32` | Conexiones abiertas a la vez por pestaña. |
| `stream_limit_per_host` | `8` | Conexiones a la vez hacia un mismo destino. |

nginx además corta las conexiones que no vienen de una página de
`eclipse-os.dev` (cabecera `Origin`) y deja como mucho 4 por IP.

Ojo: lo que salga por aquí sale con la IP del servidor.
