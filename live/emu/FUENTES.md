# De dónde sale cada fichero / Where each file comes from

Generados por `scripts/live-web/build.sh` del repositorio
[Pryancito/eclipse](https://github.com/Pryancito/eclipse/tree/master/scripts/live-web)
(commit en `manifest.json`). / Built by that script (commit in `manifest.json`).

| Fichero | Fuente | Licencia |
| --- | --- | --- |
| `qemu-system-riscv64.{js,wasm,worker.js}` | [ktock/qemu-wasm](https://github.com/ktock/qemu-wasm) @ `0ef7b4e2814b231705d8371dd7997f5b72e70baf` | GPL-2.0 |
| `opensbi.bin` | `pc-bios/opensbi-riscv64-generic-fw_dynamic.bin` del mismo árbol de QEMU | BSD-2-Clause |
| `zcore.bin.gz`, `initrd.img.gz` | [Pryancito/eclipse](https://github.com/Pryancito/eclipse) | Ver su `LICENSE` |
