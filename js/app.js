// Bilingual Translations Dictionary - Eclipse OS Grounded Copy with History & Configurator
const TRANSLATIONS = {
  en: {
    // Navbar
    nav_features: "Features",
    nav_downloads: "Downloads",
    nav_guide: "Get Started",
    nav_faq: "FAQ",
    nav_btn_download: "GitHub Repo",

    // Hero
    hero_tagline: "Zircon-Based Microkernel in safe Rust",
    hero_title: "Eclipse OS",
    hero_desc: "Eclipse OS is an experimental operating system based on Zircon, written in safe Rust. It aims to natively execute Linux applications and graphical environments directly, booting on bare-metal or running in user-space as a library OS (libos).",
    hero_btn_start: "Get Started",
    hero_btn_github: "View on GitHub",

    // History Section
    sec_history_sub: "Origins",
    sec_history_title: "Our Story",
    history_text: "Eclipse OS was born as an evolutionary fork of the zCore microkernel. Bootstrapped by Pryan (Moebius) and a group of passionate contributors, the project takes Google's Zircon microkernel design in safe Rust and expands it into a fully compatible operating system. We are committed to achieving high compatibility standards while maintaining clean design and good taste.",

    // Section Titles
    sec_features_sub: "Features",
    sec_features_title: "Key Design Concepts",
    sec_guide_sub: "Quick Start",
    sec_guide_title: "How to Boot and Run Eclipse OS",
    sec_downloads_sub: "Releases",
    sec_downloads_title: "Download Options",
    sec_faq_sub: "Common Questions",
    sec_faq_title: "Frequently Asked Questions",

    // Features Section
    feat_micro_title: "Zircon Reimplementation",
    feat_micro_desc: "We build on Google's Zircon microkernel architecture in safe Rust, isolating system services and keeping the kernel core clean and modular.",
    
    feat_rust_title: "Memory-Safe Core",
    feat_rust_desc: "Developed in safe Rust to eliminate buffer overflows, data races, and NULL pointer dereferences at compile time right at the kernel layer.",
    
    feat_corona_title: "Graphical Compatibility Goal",
    feat_corona_desc: "While currently terminal-based, our roadmap focuses on providing support for standard Linux desktop environments and graphical interfaces, balancing compatibility with clean aesthetics.",
    
    feat_orbit_title: "BusyBox & Musl-libc",
    feat_orbit_desc: "Includes a default root filesystem with busybox utilities and C libraries, launching a shell directly at startup.",

    feat_nvidia_title: "NVIDIA GPU Support",
    feat_nvidia_desc: "User-space driver framework for NVIDIA GPUs, providing basic display outputs and hardware acceleration without risking kernel stability.",

    feat_intel_title: "Hardware & VM Testing",
    feat_intel_desc: "Eclipse OS is actively tested on multiple emulators and has successfully booted bare-metal on our primary developer's computer.",

    // Compatibility Section
    nav_compat: "Compatibility",
    sec_compat_sub: "Compatibility",
    sec_compat_title: "Hardware Advisor",
    compat_cpu_label: "CPU Architecture",
    compat_gpu_label: "Graphics Controller",
    compat_net_label: "Network Adapter",
    compat_platform_label: "Platform / Host",
    compat_status_supported: "Compatible",
    compat_status_wip: "In Development",
    compat_status_planned: "Planned",
    compat_detail_driver: "Required Driver",
    compat_detail_mode: "Operation Mode",
    compat_detail_notes: "Additional Notes",
    terminal_tip: "💡 Click inside the terminal to type your own commands (e.g. <span class=\"code-highlight\">help</span> or <span class=\"code-highlight\">neofetch</span>), type <span class=\"code-highlight\">clear</span> to wipe.",

    // Configurator Widget
    config_title: "rboot.conf Boot Configurator",
    config_desc: "Configure the boot arguments of Eclipse OS to customize the initialization process (init).",
    config_label_proc: "Initial Process (ROOTPROC)",
    config_label_custom: "Custom Route",
    config_label_log: "Log Level (LOG)",
    config_btn_copy: "Copy",
    config_btn_boot: "Boot OS",

    // Interactive Terminal Tabs
    tab_qemu: "Run in QEMU",
    tab_usb: "Write to USB",
    tab_source: "Compile Source",

    // Downloads Section
    dl_x86_title: "Desktop ISO",
    dl_x86_desc: "Standard bootable image. Binary builds will be hosted here once the system reaches release milestones.",
    dl_vm_title: "Virtual Machine Image",
    dl_vm_desc: "Pre-made virtual disk image for emulators. Ready-to-boot VM files are coming soon.",
    dl_src_title: "Source Code",
    dl_src_desc: "Get the codebase and bootstrap scripts. Currently, compiling from source is the primary way to test Eclipse OS.",
    
    dl_spec_os: "OS Edition",
    dl_spec_arch: "Architecture",
    dl_spec_size: "File Size",
    dl_spec_format: "Format",
    dl_spec_sys: "System Req.",
    
    dl_stable: "Coming Soon",
    dl_nightly: "Coming Soon",
    dl_source: "Available",
    
    dl_btn_download: "Coming Soon",
    dl_btn_clone: "Clone Repository",
    dl_hash: "SHA-256 Checksum",

    // FAQ Section
    faq_q1: "Is Eclipse OS based on Linux?",
    faq_a1: "No. Eclipse OS is a Zircon-based microkernel reimplemented in Rust, bootstrapped from the zCore project. It is not based on Linux, but it includes compatibility layers to load and run native Linux ELF binaries directly.",
    
    faq_q2: "Can I run my existing Linux apps?",
    faq_a2: "Yes, Eclipse OS features native support to run statically compiled Linux ELF binaries or those built against musl-libc. Command-line utilities like BusyBox run fully, and graphical apps are under development.",
    
    faq_q3: "What are the minimum hardware requirements?",
    faq_a3: "For bare-metal or emulation, you need an x86_64 CPU or compatible RISC-V board, and at least 512MB of RAM. It features experimental support for Intel e1000/igb network interfaces and NVIDIA graphics.",
    
    faq_q4: "How can I contribute to Eclipse OS?",
    faq_a4: "You can collaborate by writing code, contributing hardware drivers to the microkernel, improving POSIX compatibility, or helping with documentation on GitHub.",

    // Footer
    footer_desc: "An experimental, open-source operating system designed for educational purposes, focusing on Zircon microkernel modularity and Rust development.",
    footer_col_project: "Project",
    footer_col_community: "Community",
    footer_link_features: "Features",
    footer_link_downloads: "Downloads",
    footer_link_docs: "Documentation",
    footer_link_github: "GitHub",
    footer_link_discord: "Discord",
    footer_link_twitter: "Twitter",
    footer_copy: "&copy; 2026 Eclipse OS Project. Distributed under the MIT & Apache 2.0 Licenses.",

    // Architecture Section
    nav_architecture: "Architecture",
    sec_arch_sub: "Engineering",
    sec_arch_title: "Interactive Architecture",
    arch_instructions: "Click on any component in the diagram to explore its inner workings.",
    arch_details_title: "Component Details",
    arch_details_select: "Select any component in the diagram to view its details.",
    
    arch_title_user_apps: "User Applications",
    arch_desc_user_apps: "User-space programs such as the <code>busybox</code> command shell, development tools, and utilities. They run isolated with no direct kernel privileges.",
    arch_title_graphics_server: "Graphics Server (NVIDIA)",
    arch_desc_graphics_server: "User-space graphics server. In Eclipse OS, the NVIDIA graphics driver runs inside a sandboxed user process. If the graphics subsystem crashes, the kernel restarts it immediately without interrupting system state.",
    arch_title_net_manager: "Network Manager",
    arch_desc_net_manager: "User-space network service that manages physical/virtual interfaces (Intel e1000, VirtIO, etc.) and implements TCP/IP protocols outside the core kernel.",
    arch_title_posix_compat: "POSIX Compatibility (musl)",
    arch_desc_posix_compat: "Translates standard Linux system calls to native Zircon microkernel primitives, and includes the lightweight <code>musl-libc</code>. This allows compiled Linux binaries (like BusyBox) to run unmodified.",
    arch_title_ipc_bridge: "Zircon IPC Boundary",
    arch_desc_ipc_bridge: "Strict capability-based security boundary. User processes communicate with kernel services via thread-safe <strong>Zircon Channels, Ports, and Handles</strong>. Direct memory tampering is physically impossible.",
    arch_title_vm_manager: "Virtual Memory Manager",
    arch_desc_vm_manager: "Written in safe Rust, it controls process virtual memory spaces, handles page faults, mappings, allocations, and enforces memory safety guarantees without garbage collection.",
    arch_title_scheduler: "Thread Scheduler",
    arch_desc_scheduler: "Kernel thread scheduler that assigns CPU time to user and kernel tasks. Uses fair priority-based scheduling to ensure smooth multitasking and high responsiveness.",
    arch_title_mmu_control: "MMU Control",
    arch_desc_mmu_control: "Interacts directly with the processor's Memory Management Unit (MMU) to map page tables and isolate process memory spaces.",
    arch_title_syscall_interface: "System Call Interface",
    arch_desc_syscall_interface: "The thin entry point to the kernel. User processes trigger syscalls to perform safe IPC operations, request memory, or spawn threads.",
    arch_title_hardware_cpu: "CPU Architecture",
    arch_desc_hardware_cpu: "Supports modern physical CPUs (Intel/AMD 64-bit, RISC-V, ARM64). The microkernel runs in supervisor mode (Ring 0 / Supervisor), while drivers and apps run in user mode (Ring 3 / User).",
    arch_title_hardware_mem: "RAM & Hardware MMU",
    arch_desc_hardware_mem: "Physical memory hardware. The CPU's physical MMU protects kernel code pages from user-space tampering.",
    arch_title_hardware_dev: "I/O Devices",
    arch_desc_hardware_dev: "Physical network cards, GPUs, and disks. The kernel maps physical I/O registers (MMIO) to driver processes, enabling fast, isolated hardware access."
  },
  es: {
    // Navbar
    nav_features: "Características",
    nav_downloads: "Descargas",
    nav_guide: "Primeros Pasos",
    nav_faq: "FAQ",
    nav_btn_download: "Repo GitHub",

    // Hero
    hero_tagline: "Micronúcleo basado en Zircon escrito en Rust",
    hero_title: "Eclipse OS",
    hero_desc: "Eclipse OS es un núcleo de sistema operativo experimental basado en Zircon, escrito en Rust seguro. Busca ejecutar de forma nativa aplicaciones y entornos gráficos de Linux, arrancando en metal real o como Library OS (libos) en espacio de usuario.",
    hero_btn_start: "Comenzar",
    hero_btn_github: "Ver en GitHub",

    // History Section
    sec_history_sub: "Orígenes",
    sec_history_title: "Nuestra Historia",
    history_text: "Eclipse OS nació como una evolución del micronúcleo zCore. Creado por Pryan (Moebius) y un grupo de colaboradores, el proyecto toma el diseño del micronúcleo Zircon de Google en Rust seguro para transformarlo en un sistema completo. Nuestro compromiso es dar soporte a todo el entorno Linux, manteniendo la compatibilidad y el buen gusto.",

    // Section Titles
    sec_features_sub: "Características",
    sec_features_title: "Conceptos de Diseño",
    sec_guide_sub: "Inicio Rápido",
    sec_guide_title: "Cómo Probar Eclipse OS",
    sec_downloads_sub: "Descargas",
    sec_downloads_title: "Opciones de Descarga",
    sec_faq_sub: "Preguntas Comunes",
    sec_faq_title: "Preguntas Frecuentes",

    // Features Section
    feat_micro_title: "Reimplementación de Zircon",
    feat_micro_desc: "Construimos sobre la arquitectura del micronúcleo Zircon de Google en Rust seguro, manteniendo el núcleo mínimo y aislando los servicios en el espacio de usuario.",
    
    feat_rust_title: "Núcleo Seguro en Memoria",
    feat_rust_desc: "Desarrollado en Rust seguro para eliminar errores de desbordamiento de búfer y desreferencia de punteros en tiempo de compilación directos en la capa del núcleo.",
    
    feat_corona_title: "Objetivo Gráfico",
    feat_corona_desc: "Aunque actualmente arranca en terminal, planeamos dar soporte a todas las interfaces gráficas y escritorios de Linux en el futuro, manteniendo la compatibilidad y el buen gusto.",
    
    feat_orbit_title: "BusyBox y Musl-libc",
    feat_orbit_desc: "Incluye un sistema de archivos inicial con utilidades BusyBox y bibliotecas C Musl, iniciando directamente una shell de comandos al arrancar.",

    feat_nvidia_title: "Soporte de Gráficos NVIDIA",
    feat_nvidia_desc: "Framework de controladores en espacio de usuario para GPUs NVIDIA, que ofrece salida de pantalla básica y aceleración sin comprometer la estabilidad del núcleo.",

    feat_intel_title: "Pruebas en Hardware y Emuladores",
    feat_intel_desc: "Eclipse OS se ejecuta de forma activa en emuladores y ya se ha probado con éxito arrancando en metal real en el ordenador personal de su desarrollador.",

    // Compatibility Section
    nav_compat: "Compatibilidad",
    sec_compat_sub: "Compatibilidad",
    sec_compat_title: "Asesor de Hardware",
    compat_cpu_label: "Arquitectura CPU",
    compat_gpu_label: "Controladora Gráfica",
    compat_net_label: "Adaptador de Red",
    compat_platform_label: "Plataforma / Host",
    compat_status_supported: "Compatible",
    compat_status_wip: "En Desarrollo",
    compat_status_planned: "Planificado",
    compat_detail_driver: "Controlador Requerido",
    compat_detail_mode: "Modo de Operación",
    compat_detail_notes: "Notas Adicionales",
    terminal_tip: "💡 Haz clic dentro de la terminal para escribir tus propios comandos (ej. <span class=\"code-highlight\">help</span> o <span class=\"code-highlight\">neofetch</span>), escribe <span class=\"code-highlight\">clear</span> para limpiar.",

    // Configurator Widget
    config_title: "Configurador de rboot.conf",
    config_desc: "Modifica los argumentos de arranque de Eclipse OS para cambiar el proceso inicial (init).",
    config_label_proc: "Proceso Inicial (ROOTPROC)",
    config_label_custom: "Ruta Personalizada",
    config_label_log: "Nivel de Log (LOG)",
    config_btn_copy: "Copiar",
    config_btn_boot: "Arrancar SO",

    // Interactive Terminal Tabs
    tab_qemu: "Probar en QEMU",
    tab_usb: "Grabar en USB",
    tab_source: "Compilar Código",

    // Downloads Section
    dl_x86_title: "ISO de Escritorio",
    dl_x86_desc: "Medio de instalación arrancable. Las imágenes precompiladas estarán disponibles una vez el sistema alcance su fase estable.",
    dl_vm_title: "Imagen de Máquina Virtual",
    dl_vm_desc: "Imagen de disco lista para QEMU o VirtualBox. Las descargas de imágenes VM preconstruidas estarán disponibles próximamente.",
    dl_src_title: "Código Fuente",
    dl_src_desc: "Obtén el repositorio de código. Actualmente, compilar desde las fuentes es la vía principal para probar Eclipse OS.",
    
    dl_spec_os: "Edición SO",
    dl_spec_arch: "Arquitectura",
    dl_spec_size: "Tamaño",
    dl_spec_format: "Formato",
    dl_spec_sys: "Requisitos",
    
    dl_stable: "Próximamente",
    dl_nightly: "Próximamente",
    dl_source: "Disponible",
    
    dl_btn_download: "Próximamente",
    dl_btn_clone: "Clonar Repositorio",
    dl_hash: "Suma de verificación SHA-256",

    // FAQ Section
    faq_q1: "¿Está Eclipse OS basado en Linux?",
    faq_a1: "No. Eclipse OS es un micronúcleo basado en Zircon reimplementado en Rust, iniciado a partir del proyecto zCore. No está basado en Linux, pero incluye capas de compatibilidad para cargar y ejecutar binarios ELF de Linux nativos.",
    
    faq_q2: "¿Puedo ejecutar mis aplicaciones de Linux?",
    faq_a2: "Sí, Eclipse OS cuenta con soporte nativo para ejecutar binarios ELF de Linux compilados estáticamente o usando musl-libc. Las utilidades de consola como BusyBox funcionan por completo, y las apps gráficas están en desarrollo.",
    
    faq_q3: "¿Cuáles son los requisitos mínimos de hardware?",
    faq_a3: "Para el modo bare-metal o emulación, necesitas un procesador x86_64 o una placa RISC-V compatible, y al menos 512 MB de RAM. Cuenta con soporte experimental para tarjetas ethernet Intel e1000/igb y gráficos NVIDIA.",
    
    faq_q4: "¿Cómo puedo contribuir al proyecto?",
    faq_a4: "Puedes colaborar aportando código, contribuyendo controladores de hardware para el micronúcleo, mejorando la compatibilidad POSIX o ayudando con la documentación en GitHub.",

    // Footer
    footer_desc: "Un sistema operativo experimental de código abierto para fines educativos, centrado en la modularidad del micronúcleo Zircon y desarrollo en Rust.",
    footer_col_project: "Proyecto",
    footer_col_community: "Comunidad",
    footer_link_features: "Características",
    footer_link_downloads: "Descargas",
    footer_link_docs: "Documentación",
    footer_link_github: "GitHub",
    footer_link_discord: "Discord",
    footer_link_twitter: "Twitter",
    footer_copy: "&copy; 2026 Proyecto Eclipse OS. Distribuido bajo las licencias MIT y Apache 2.0.",

    // Architecture Section
    nav_architecture: "Arquitectura",
    sec_arch_sub: "Ingeniería",
    sec_arch_title: "Arquitectura Interactiva",
    arch_instructions: "Haz clic en cualquier componente del diagrama para explorar su funcionamiento interno.",
    arch_details_title: "Detalles del Componente",
    arch_details_select: "Selecciona cualquier componente en el diagrama para ver sus detalles técnicos.",

    arch_title_user_apps: "Aplicaciones de Usuario",
    arch_desc_user_apps: "Programas de espacio de usuario como la consola de comandos <code>busybox</code>, compiladores y utilidades del sistema. Corren de forma aislada y sin privilegios directos.",
    arch_title_graphics_server: "Servidor Gráfico (NVIDIA)",
    arch_desc_graphics_server: "Servidor gráfico en espacio de usuario. En Eclipse OS, el driver de NVIDIA corre en un proceso de usuario aislado. Si falla, el kernel lo reinicia sin colgar el sistema operativo.",
    arch_title_net_manager: "Gestor de Red",
    arch_desc_net_manager: "Servicio de red en espacio de usuario que administra interfaces físicas y virtuales (Intel e1000, VirtIO, etc.) y procesa protocolos TCP/IP fuera del núcleo.",
    arch_title_posix_compat: "Compatibilidad POSIX (musl)",
    arch_desc_posix_compat: "Traduce las llamadas al sistema de Linux a primitivas nativas del micronúcleo Zircon, e incluye la biblioteca <code>musl-libc</code>. Esto permite ejecutar binarios de Linux sin compilar de nuevo.",
    arch_title_ipc_bridge: "Límite de IPC de Zircon",
    arch_desc_ipc_bridge: "Frontera de seguridad estricta basada en capacidades. Los procesos de usuario se comunican con el núcleo mediante <strong>Canales, Puertos y Manejadores (Handles) de Zircon</strong>. No hay memoria compartida directa sin control.",
    arch_title_vm_manager: "Gestor de Memoria Virtual",
    arch_desc_vm_manager: "Escrito en Rust seguro, controla los espacios de direcciones virtuales de los procesos, resuelve fallos de página (page faults) y garantiza la seguridad de memoria sin recolector de basura.",
    arch_title_scheduler: "Planificador de Tareas",
    arch_desc_scheduler: "Módulo del núcleo que asigna tiempo de CPU a las tareas de usuario y del sistema. Implementa algoritmos de prioridad justa para asegurar una multitarea fluida y una alta respuesta.",
    arch_title_mmu_control: "Control de la MMU",
    arch_desc_mmu_control: "Interactúa directamente con la Unidad de Gestión de Memoria (MMU) física para mapear tablas de páginas y aislar la memoria de cada proceso.",
    arch_title_syscall_interface: "Interfaz de Syscalls",
    arch_desc_syscall_interface: "El punto de entrada seguro al micronúcleo. Los procesos de usuario invocan syscalls para crear canales IPC, reservar memoria o iniciar hilos.",
    arch_title_hardware_cpu: "Arquitectura CPU",
    arch_desc_hardware_cpu: "Soporte para CPUs físicas modernas (Intel/AMD de 64 bits, RISC-V, ARM64). El micronúcleo corre en modo supervisor (Ring 0 / Supervisor), mientras que aplicaciones y drivers corren en modo usuario (Ring 3 / User).",
    arch_title_hardware_mem: "RAM y MMU Física",
    arch_desc_hardware_mem: "Hardware de memoria física. La MMU física de la CPU protege las páginas del micronúcleo frente a escrituras no autorizadas desde el espacio de usuario.",
    arch_title_hardware_dev: "Dispositivos E/S",
    arch_desc_hardware_dev: "Tarjetas de red, GPUs y almacenamiento físico. El micronúcleo mapea los registros físicos (MMIO) directamente en el espacio de memoria de los drivers aislados."
  }
};

// State Variables
let currentLanguage = localStorage.getItem("eclipse-lang") || "es";
let terminalTypingInterval = null;
let activeTabId = "qemu";
let isTerminalAnimating = false;

// Terminal scripts for simulations (actual Makefile & cargo xtask commands)
const TERMINAL_SCRIPTS = {
  qemu: {
    command: "make qemu ARCH=x86_64",
    output: [
      "[System] Starting QEMU virtual machine emulator for x86_64 (ICH9 layouts)...",
      "[System] Loading bootloader and kernel image...",
      "[Kernel] Booting Eclipse OS microkernel...",
      "[Kernel] Kernel initialized successfully in safe memory space.",
      "[Kernel] Core: 4 processors. RAM: 2048 MB.",
      "[Kernel] Loading user-space network driver: intel_e1000.drv",
      "[Kernel] Loading user-space graphics driver: nvidia_gpu.drv",
      "[Service] Network interface 'eth0' active (Intel e1000).",
      "[Service] Graphics subsystem active (NVIDIA Hardware Channel).",
      "[Kernel] Parsing rootproc from rboot.conf: ROOTPROC=/bin/busybox?sh",
      "[Kernel] Launching init process: /bin/busybox (sh)",
      "[busybox] busybox v1.35.0 (musl) active. Welcome to Eclipse OS shell!",
      "/ #"
    ]
  },
  usb: {
    command: "cargo run --package xtask --release -- efi --arch x86_64 && sudo dd if=target/x86_64/release/zcore.img of=/dev/sdX bs=4M && sync",
    output: [
      "[xtask] Building bootable EFI system disk image...",
      "[xtask] Packaging partition table GPT with FAT32 layout...",
      "[System] Writing zcore.img to drive /dev/sdX...",
      "[System] 240 MB written to USB storage media (avg 80MB/s).",
      "[System] Flushing sync cache... Done.",
      "[System] Complete! UEFI USB boot drive ready to run Eclipse OS on bare-metal."
    ]
  },
  source: {
    command: "git clone https://github.com/Pryancito/eclipse.git && cd eclipse && cargo run --package xtask --release -- zircon-init",
    output: [
      "Cloning into 'eclipse'...",
      "remote: Enumerating objects: 14082, done.",
      "remote: Compressing objects: 100% (4102/4102), done.",
      "Receiving objects: 100% (14082/14082), 24.50 MiB | 15.2 MB/s, done.",
      "[xtask] Running build setup scripts...",
      "[xtask] Downloading prebuilt Zircon userboot binaries from upstream...",
      "[xtask] Unpacking zircon files to target/zircon/...",
      "[xtask] Finished setup! You can now compile or run: 'make qemu ARCH=x86_64'"
    ]
  }
};

// Language Management
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("eclipse-lang", lang);
  
  // Update toggle classes
  const switcher = document.getElementById("lang-switcher");
  if (lang === "es") {
    switcher.classList.remove("en-active");
    switcher.classList.add("es-active");
  } else {
    switcher.classList.remove("es-active");
    switcher.classList.add("en-active");
  }
  
  // Translate elements
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      element.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // Dispatch custom language changed event
  window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language: lang } }));
  
  // Restart the current terminal script to reflect language/visual refresh
  const activeTab = document.querySelector(".tab-btn.active");
  if (activeTab) {
    const tabId = activeTab.getAttribute("data-tab");
    runTerminalSimulation(tabId);
  }
}

// Terminal Simulator Logic
function runTerminalSimulation(tabId) {
  activeTabId = tabId;
  isTerminalAnimating = true;

  if (terminalTypingInterval) {
    clearInterval(terminalTypingInterval);
  }
  
  const terminalBody = document.getElementById("terminal-body");
  const script = TERMINAL_SCRIPTS[tabId];
  
  if (!script) return;
  
  terminalBody.innerHTML = `
    <div class="terminal-line">
      <span class="terminal-prompt">eclipse-os:~ user$</span>
      <span class="terminal-cmd" id="term-typing-cmd"></span><span class="terminal-cursor" id="term-cursor"></span>
    </div>
    <div id="term-outputs"></div>
  `;
  
  const typingSpan = document.getElementById("term-typing-cmd");
  const outputsDiv = document.getElementById("term-outputs");
  const cursor = document.getElementById("term-cursor");
  
  let cmdText = script.command;
  let charIndex = 0;
  
  terminalTypingInterval = setInterval(() => {
    if (charIndex < cmdText.length) {
      typingSpan.textContent += cmdText[charIndex];
      charIndex++;
    } else {
      clearInterval(terminalTypingInterval);
      cursor.style.display = "none";
      
      setTimeout(() => {
        printTerminalOutputs(script.output, outputsDiv);
      }, 350);
    }
  }, 35);
}

function printTerminalOutputs(outputs, targetDiv) {
  let lineIndex = 0;
  
  function printNextLine() {
    if (lineIndex < outputs.length) {
      const lineText = outputs[lineIndex];
      const lineElement = document.createElement("div");
      lineElement.className = "terminal-line terminal-out";
      
      let formattedText = lineText
        .replace(/(\[Kernel\]|\[System\]|\[Cargo\]|\[Service\]|\[xtask\])/g, '<span class="terminal-highlight">$1</span>')
        .replace(/(100%|done\.|successfully\.|active\.|ready|successful\.)/g, '<span style="color: #22c55e;">$1</span>')
        .replace(/(\([^\)]+\))/g, '<span style="color: #ffd384;">$1</span>');
        
      lineElement.innerHTML = formattedText;
      targetDiv.appendChild(lineElement);
      
      const termWindow = document.getElementById("terminal-body");
      termWindow.scrollTop = termWindow.scrollHeight;
      
      lineIndex++;
      
      const delay = lineText.includes("Downloading") || lineText.includes("Compiling") ? 400 : 120;
      setTimeout(printNextLine, delay);
    } else {
      isTerminalAnimating = false;
      const finalPrompt = document.createElement("div");
      finalPrompt.className = "terminal-line interactive-prompt-line";
      
      if (activeTabId === "boot_config") {
        const procSelect = document.getElementById("config-proc");
        const customProcInput = document.getElementById("config-custom-proc");
        let rootProcVal = procSelect ? procSelect.value : "/bin/busybox?sh";
        if (rootProcVal === "custom" && customProcInput) {
          rootProcVal = customProcInput.value.trim() || "/bin/custom-init";
        }
        
        if (!rootProcVal.includes("busybox") && !rootProcVal.includes("init")) {
          // System is halted or panicked, show hint
          const restartHint = currentLanguage === "es" 
            ? "[Sistema detenido. Cambia la configuración abajo y pulsa 'Arrancar SO' para reiniciar]"
            : "[System halted. Adjust configuration below and click 'Boot OS' to restart]";
          finalPrompt.innerHTML = `<span style="color: #64748b; font-style: italic; user-select: none;">${restartHint}</span>`;
          targetDiv.appendChild(finalPrompt);
          const termWindow = document.getElementById("terminal-body");
          termWindow.scrollTop = termWindow.scrollHeight;
          return;
        }
      }

      finalPrompt.innerHTML = `
        <span class="terminal-prompt">eclipse-os:~ user$</span>
        <span class="terminal-cmd" id="terminal-interactive-cmd"></span><span class="terminal-cursor" id="terminal-cursor-interactive"></span>
      `;
      targetDiv.appendChild(finalPrompt);
      
      const termWindow = document.getElementById("terminal-body");
      termWindow.scrollTop = termWindow.scrollHeight;
    }
  }
  
  printNextLine();
}

// Dynamic OS Boot Simulation Triggered from Configurator
function bootOSWithConfig(logLevel, rootProc) {
  const cmd = `make qemu LOG=${logLevel} ROOTPROC=${rootProc}`;
  const output = [];
  const lang = currentLanguage;
  
  if (lang === "es") {
    output.push(`[System] Iniciando máquina virtual QEMU con argumentos: LOG=${logLevel} ROOTPROC=${rootProc}...`);
    output.push("[System] Cargando cargador de arranque rboot (UEFI)...");
    output.push("[Kernel] Cargando núcleo de Eclipse OS en Rust...");
    output.push("[Kernel] Inicialización del microkernel de Zircon...");
    
    if (logLevel === "debug") {
      output.push("[Kernel] Dbg: MMU habilitada. Espacio de direcciones virtuales del núcleo activo.");
      output.push("[Kernel] Dbg: Inicializando tablas de páginas físicas en Ring 0.");
      output.push("[Kernel] Dbg: Detectado bus local APIC para multitarea.");
      output.push("[Kernel] Dbg: Detectado controlador de interrupciones x86_64.");
      output.push("[Kernel] Dbg: Bus PCI enumerado. Encontrado dispositivo 8086:100e (red).");
      output.push("[Kernel] Dbg: Bus PCI enumerado. Encontrado dispositivo 10de:1c03 (gráficos).");
    }
    
    if (logLevel === "debug" || logLevel === "info" || logLevel === "warn") {
      output.push("[Kernel] Dispositivo de red física Intel e1000 cargado en espacio de usuario.");
      output.push("[Kernel] Dispositivo gráfico NVIDIA GPU cargado en espacio de usuario.");
    }
    
    output.push(`[Kernel] Iniciando proceso de espacio de usuario ROOTPROC: ${rootProc}`);
    
    if (rootProc.includes("helloworld")) {
      output.push("[busybox] hello_world: ¡Hola mundo desde el espacio de usuario de Eclipse OS!");
      output.push("[System] Proceso inicial finalizó con código 0.");
      output.push("<span style='color: #ffd384;'>[Kernel] Info: No hay más procesos activos. Entrando en modo de ahorro de energía (Halt).</span>");
    } else if (rootProc.includes("busybox") || rootProc.includes("init")) {
      output.push("[busybox] busybox v1.35.0 (musl) inicializado con éxito.");
      output.push("[busybox] Ejecutando shell interactiva (/bin/busybox sh)...");
      output.push("/ #");
    } else {
      output.push(`<span style='color: #ef4444;'>[Kernel] PANIC: Fallo al ejecutar el proceso inicial '${rootProc}': archivo no encontrado.</span>`);
      output.push("<span style='color: #ef4444;'>[Kernel] panic: volcado de registros de la CPU (Ring 0):</span>");
      output.push("<pre style='font-family: inherit; margin: 0; color: #ef4444;'>  RAX: 0000000000000002  RBX: 0000000000000000  RCX: 0000000000000001\n" +
                  "  RDX: fffffff80012ef00  RSP: fffffff80012ef38  RBP: fffffff80012ef60\n" +
                  "  RIP: fffffff80005ca20  RFL: 0000000000000246 (Interrupts Enabled)</pre>");
      output.push("<span style='color: #ef4444;'>[Kernel] Stack Trace: [0xfffffff80005ca20] -> [0xfffffff800062b10] -> System Halted.</span>");
    }
  } else {
    output.push(`[System] Starting QEMU virtual machine with arguments: LOG=${logLevel} ROOTPROC=${rootProc}...`);
    output.push("[System] Loading rboot bootloader (UEFI)...");
    output.push("[Kernel] Loading Eclipse OS kernel in Rust...");
    output.push("[Kernel] Initializing Zircon microkernel core...");
    
    if (logLevel === "debug") {
      output.push("[Kernel] Dbg: MMU enabled. Active kernel virtual address space.");
      output.push("[Kernel] Dbg: Initializing physical page tables in Ring 0.");
      output.push("[Kernel] Dbg: Local APIC detected for multitasking.");
      output.push("[Kernel] Dbg: Intel x86_64 interrupt controller initialized.");
      output.push("[Kernel] Dbg: PCI bus enumerated. Found device 8086:100e (network).");
      output.push("[Kernel] Dbg: PCI bus enumerated. Found device 10de:1c03 (graphics).");
    }
    
    if (logLevel === "debug" || logLevel === "info" || logLevel === "warn") {
      output.push("[Kernel] Intel e1000 network hardware interface loaded in user space.");
      output.push("[Kernel] NVIDIA GPU driver initialized in user space.");
    }
    
    output.push(`[Kernel] Starting initial user-space process ROOTPROC: ${rootProc}`);
    
    if (rootProc.includes("helloworld")) {
      output.push("[busybox] hello_world: Hello world from Eclipse OS user space!");
      output.push("[System] Initial process exited with code 0.");
      output.push("<span style='color: #ffd384;'>[Kernel] Info: No more active processes. Entering CPU Halt power-save state.</span>");
    } else if (rootProc.includes("busybox") || rootProc.includes("init")) {
      output.push("[busybox] busybox v1.35.0 (musl) initialized successfully.");
      output.push("[busybox] Spawning interactive POSIX shell (/bin/busybox sh)...");
      output.push("/ #");
    } else {
      output.push(`<span style='color: #ef4444;'>[Kernel] PANIC: Failed to execute initial process '${rootProc}': file not found.</span>`);
      output.push("<span style='color: #ef4444;'>[Kernel] panic: CPU register dump (Ring 0):</span>");
      output.push("<pre style='font-family: inherit; margin: 0; color: #ef4444;'>  RAX: 0000000000000002  RBX: 0000000000000000  RCX: 0000000000000001\n" +
                  "  RDX: fffffff80012ef00  RSP: fffffff80012ef38  RBP: fffffff80012ef60\n" +
                  "  RIP: fffffff80005ca20  RFL: 0000000000000246 (Interrupts Enabled)</pre>");
      output.push("<span style='color: #ef4444;'>[Kernel] Stack Trace: [0xfffffff80005ca20] -> [0xfffffff800062b10] -> System Halted.</span>");
    }
  }

  TERMINAL_SCRIPTS["boot_config"] = {
    command: cmd,
    output: output
  };

  const terminalSec = document.getElementById("guide");
  if (terminalSec) {
    terminalSec.scrollIntoView({ behavior: "smooth" });
  }

  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  runTerminalSimulation("boot_config");
}

// Interactive rboot.conf Configurator Widget Logic
function initConfigurator() {
  const procSelect = document.getElementById("config-proc");
  const customProcInput = document.getElementById("config-custom-proc");
  const customProcContainer = document.getElementById("config-custom-proc-container");
  const logSelect = document.getElementById("config-log");
  const outputSpan = document.getElementById("config-output");
  const copyBtn = document.getElementById("btn-copy-config");
  const bootBtn = document.getElementById("btn-boot-config");
  
  if (!procSelect || !outputSpan) return;
  
  function updateConfig() {
    let procVal = procSelect.value;
    if (procVal === "custom") {
      customProcContainer.style.display = "block";
      procVal = customProcInput.value.trim() || "/bin/custom-init";
    } else {
      customProcContainer.style.display = "none";
    }
    
    const logVal = logSelect.value;
    const cleanProcVal = procVal.replace(/\s+/g, '?');
    outputSpan.textContent = `cmdline=LOG=${logVal}:ROOTPROC=${cleanProcVal}`;
  }
  
  procSelect.addEventListener("change", updateConfig);
  customProcInput.addEventListener("input", updateConfig);
  logSelect.addEventListener("change", updateConfig);
  
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(outputSpan.textContent).then(() => {
      const copyTextSpan = copyBtn.querySelector("[data-i18n]");
      const origText = copyTextSpan.textContent;
      copyTextSpan.textContent = currentLanguage === "es" ? "¡Copiado!" : "Copied!";
      setTimeout(() => {
        copyTextSpan.textContent = origText;
      }, 1500);
    });
  });

  if (bootBtn) {
    bootBtn.addEventListener("click", () => {
      let procVal = procSelect.value;
      if (procVal === "custom") {
        procVal = customProcInput.value.trim() || "/bin/custom-init";
      }
      const logVal = logSelect.value;
      bootOSWithConfig(logVal, procVal);
    });
  }
  
  updateConfig();
}

// FAQ Accordion Handler
function initFAQ() {
  document.querySelectorAll(".faq-item").forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      document.querySelectorAll(".faq-item").forEach(otherItem => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").style.maxHeight = null;
      });
      
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// Reveal Elements on Scroll
function initScrollObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
}

// Twinkling Space Starfield Background Animation
function initSpaceBackground() {
  const canvas = document.getElementById("space-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  let stars = [];
  let count = 120;
  let animId;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener("resize", resize);
  resize();
  
  // Initialize stars
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      speed: 0.02 + Math.random() * 0.08,
      twinkleSpeed: 0.005 + Math.random() * 0.015,
      twinkleDir: Math.random() > 0.5 ? 1 : -1
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw base dark space background gradient
    const grad = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width);
    grad.addColorStop(0, "#090914");
    grad.addColorStop(0.5, "#06060c");
    grad.addColorStop(1, "#030306");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw stars
    ctx.fillStyle = "#ffffff";
    stars.forEach(star => {
      // Update opacity
      star.alpha += star.twinkleSpeed * star.twinkleDir;
      if (star.alpha >= 0.95) {
        star.alpha = 0.95;
        star.twinkleDir = -1;
      } else if (star.alpha <= 0.05) {
        star.alpha = 0.05;
        star.twinkleDir = 1;
      }
      
      // Update drift position
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
      
      ctx.globalAlpha = star.alpha;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.globalAlpha = 1.0;
    animId = requestAnimationFrame(animate);
  }
  
  animate();
}

// Interactive Terminal Shell Emulator Logic
function initInteractiveTerminal() {
  const clicker = document.getElementById("terminal-window-clicker");
  const hiddenInput = document.getElementById("terminal-hidden-input");
  const terminalBody = document.getElementById("terminal-body");

  if (!clicker || !hiddenInput || !terminalBody) return;

  // Global click listener to focus hidden input
  clicker.addEventListener("click", () => {
    if (isTerminalAnimating) {
      // Skip simulation typing delay and render outputs immediately
      clearInterval(terminalTypingInterval);
      isTerminalAnimating = false;
      
      const script = TERMINAL_SCRIPTS[activeTabId];
      if (script) {
        terminalBody.innerHTML = `
          <div class="terminal-line">
            <span class="terminal-prompt">eclipse-os:~ user$</span>
            <span class="terminal-cmd">${script.command}</span>
          </div>
          <div id="term-outputs"></div>
        `;
        
        const outputsDiv = document.getElementById("term-outputs");
        script.output.forEach(lineText => {
          const lineElement = document.createElement("div");
          lineElement.className = "terminal-line terminal-out";
          let formattedText = lineText
            .replace(/(\[Kernel\]|\[System\]|\[Cargo\]|\[Service\]|\[xtask\])/g, '<span class="terminal-highlight">$1</span>')
            .replace(/(100%|done\.|successfully\.|active\.|ready|successful\.)/g, '<span style="color: #22c55e;">$1</span>')
            .replace(/(\([^\)]+\))/g, '<span style="color: #ffd384;">$1</span>');
          lineElement.innerHTML = formattedText;
          outputsDiv.appendChild(lineElement);
        });

        const finalPrompt = document.createElement("div");
        finalPrompt.className = "terminal-line interactive-prompt-line";
        finalPrompt.innerHTML = `
          <span class="terminal-prompt">eclipse-os:~ user$</span>
          <span class="terminal-cmd" id="terminal-interactive-cmd"></span><span class="terminal-cursor" id="terminal-cursor-interactive"></span>
        `;
        outputsDiv.appendChild(finalPrompt);
        
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    }

    hiddenInput.focus();
    const cursor = document.getElementById("terminal-cursor-interactive");
    if (cursor) {
      cursor.style.display = "inline-block";
    }
  });

  // Track hidden input typing
  hiddenInput.addEventListener("input", () => {
    const activeCmdSpan = document.getElementById("terminal-interactive-cmd");
    if (activeCmdSpan) {
      activeCmdSpan.textContent = hiddenInput.value;
    }
  });

  // Capture Enter key for execution
  hiddenInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const cmd = hiddenInput.value;
      hiddenInput.value = "";

      // Freeze current typing command line
      const activeCmdSpan = document.getElementById("terminal-interactive-cmd");
      const activeCursor = document.getElementById("terminal-cursor-interactive");
      if (activeCmdSpan) {
        activeCmdSpan.id = "";
      }
      if (activeCursor) {
        activeCursor.remove();
      }

      // Execute command output
      if (cmd.trim().toLowerCase() === "clear") {
        terminalBody.innerHTML = "";
      } else if (cmd.trim() !== "") {
        const outputDiv = document.createElement("div");
        outputDiv.className = "terminal-line terminal-out";
        outputDiv.innerHTML = getCommandResponse(cmd);
        terminalBody.appendChild(outputDiv);
      }

      // Create new interactive prompt line
      const finalPrompt = document.createElement("div");
      finalPrompt.className = "terminal-line interactive-prompt-line";
      finalPrompt.innerHTML = `
        <span class="terminal-prompt">eclipse-os:~ user$</span>
        <span class="terminal-cmd" id="terminal-interactive-cmd"></span><span class="terminal-cursor" id="terminal-cursor-interactive"></span>
      `;
      terminalBody.appendChild(finalPrompt);
      
      terminalBody.scrollTop = terminalBody.scrollHeight;
      hiddenInput.focus();
    }
  });
}

// Generate Interactive Shell Command Outputs
function getCommandResponse(cmdText) {
  const cleanCmd = cmdText.trim().toLowerCase();
  
  if (cleanCmd === "help") {
    return currentLanguage === "es"
      ? "Comandos disponibles:<br>  <span class='terminal-highlight'>help</span>         Muestra esta lista de ayuda.<br>  <span class='terminal-highlight'>clear</span>        Limpia la pantalla de la terminal.<br>  <span class='terminal-highlight'>uname</span>        Muestra la información del sistema operativo.<br>  <span class='terminal-highlight'>neofetch</span>     Muestra información del sistema con un eclipse en ASCII.<br>  <span class='terminal-highlight'>ps</span>           Muestra la lista de procesos activos del micronúcleo.<br>  <span class='terminal-highlight'>ls</span>           Muestra los directorios virtuales en la raíz.<br>  <span class='terminal-highlight'>cat rboot.conf</span> Muestra los argumentos de arranque configurados en el widget de abajo."
      : "Available commands:<br>  <span class='terminal-highlight'>help</span>         Display this help menu.<br>  <span class='terminal-highlight'>clear</span>        Clear the terminal screen.<br>  <span class='terminal-highlight'>uname</span>        Display operating system release info.<br>  <span class='terminal-highlight'>neofetch</span>     Display system hardware/OS stats with ASCII art.<br>  <span class='terminal-highlight'>ps</span>           List running processes inside the microkernel.<br>  <span class='terminal-highlight'>ls</span>           List virtual root directories.<br>  <span class='terminal-highlight'>cat rboot.conf</span> Show boot arguments configured in the widget below.";
  }
  
  if (cleanCmd === "uname" || cleanCmd === "uname -a") {
    return "Eclipse-OS 2.1.0-Carbon #1 SMP Thu Jun 11 2026 x86_64 Rust/Zircon (EFI UEFI-Boot)";
  }
  
  if (cleanCmd === "ls") {
    return "<span style='color: #818cf8; font-weight: bold;'>bin/   dev/   etc/   lib/   proc/   sys/   tmp/   usr/   var/</span>";
  }
  
  if (cleanCmd === "ps") {
    return "<pre style='font-family: inherit; margin: 0;'>  PID  TUID  STAT  CPU%  MEM   COMMAND\n" +
           "    1     1  SLEEP  0.0  12MB  /bin/busybox sh\n" +
           "    3     1  SLEEP  0.1  24MB  /sbin/network_manager\n" +
           "    4     1  SLEEP  0.0  32MB  /sbin/graphics_server (nvidia)\n" +
           "   12     1  RUN    0.2  15MB  ps</pre>";
  }
  
  if (cleanCmd === "neofetch") {
    const logo = 
`    <span style="color: #ff7e47; font-weight: bold;">.---.</span>      <span style="color: #ffd384; font-weight: bold;">Eclipse OS v2.1.0 (Carbon)</span>
   <span style="color: #ff7e47; font-weight: bold;">/     \\</span>     --------------------------
  <span style="color: #ff7e47; font-weight: bold;">|  ( )  |</span>    Kernel: Zircon-Rust Microkernel
   <span style="color: #ff7e47; font-weight: bold;">\\     /</span>     Shell: busybox sh (POSIX compatibility)
    <span style="color: #ff7e47; font-weight: bold;">'---'</span>      Uptime: 24 minutes
               Compiler: rustc 1.78.0-nightly
               Memory: 112 MB / 2048 MB (Virtual)
               Host: QEMU x86_64 Emulator (ICH9 BIOS)
               Active Drivers: intel_e1000, nvidia_gpu, standard_vga`;
    return `<pre style="font-family: inherit; margin: 0; line-height: 1.4;">${logo}</pre>`;
  }
  
  if (cleanCmd === "cat rboot.conf") {
    const configOutput = document.getElementById("config-output");
    const cmdlineVal = configOutput ? configOutput.textContent : "cmdline=LOG=warn:ROOTPROC=/bin/busybox?sh";
    return `# rboot.conf boot configuration file\n# Generated dynamically by the Eclipse web tool\n\n<span style="color: #ffd384;">${cmdlineVal}</span>`;
  }
  
  // Unknown command
  return currentLanguage === "es"
    ? `sh: comando no encontrado: <span style="color: #ef4444;">${cleanCmd}</span>. Escribe <span class="terminal-highlight">help</span> para ver opciones.`
    : `sh: command not found: <span style="color: #ef4444;">${cleanCmd}</span>. Type <span class="terminal-highlight">help</span> for options.`;
}

// Hardware Compatibility Matrix Advisor Logic
function initHardwareMatrix() {
  const cpuSelect = document.getElementById("compat-cpu");
  const gpuSelect = document.getElementById("compat-gpu");
  const netSelect = document.getElementById("compat-net");
  const platformSelect = document.getElementById("compat-platform");

  const resultTitle = document.getElementById("compat-result-title");
  const statusBadge = document.getElementById("compat-status-badge");
  const resultDesc = document.getElementById("compat-result-desc");
  
  const driverVal = document.getElementById("compat-detail-driver-val");
  const modeVal = document.getElementById("compat-detail-mode-val");
  const notesVal = document.getElementById("compat-detail-notes-val");

  if (!cpuSelect || !resultTitle) return;

  const DATA = {
    es: {
      status_supported: "Compatible",
      status_wip: "En Desarrollo",
      status_planned: "Planificado",
      
      desc_supported_default: "Esta combinación está completamente soportada. El núcleo de Eclipse OS iniciará correctamente y cargará los controladores de red y gráficos en el espacio de usuario.",
      desc_riscv64: "El soporte para RISC-V 64-bit está en desarrollo activo. Eclipse OS compila y arranca en QEMU Virt, pero algunos controladores de red y periféricos aún no están completamente integrados.",
      desc_aarch64: "La arquitectura ARM64 está planificada en nuestra hoja de ruta. Actualmente el núcleo no compila de forma nativa para aarch64. ¡Las contribuciones en esta área son bienvenidas!",
      desc_nvidia: "Arquitectura x86_64 con soporte de GPU NVIDIA en espacio de usuario. Ideal para desarrollo experimental de la interfaz de usuario.",
      desc_qemu_graphics: "Combinación x86_64 estándar y gráficos QEMU VGA. Es el entorno virtual recomendado para probar y depurar el micronúcleo.",
      desc_graphics_wip: "Controladores gráficos para Intel HD y AMD Radeon se encuentran en desarrollo. El núcleo cargará en modo de búfer de fotogramas simple UEFI VESA (consola gráfica básica).",
      desc_net_wip: "Soporte para tarjetas Realtek RTL8139 está en desarrollo. El controlador se encuentra en fase de pruebas básicas.",
      desc_net_planned: "Las conexiones inalámbricas Wi-Fi están planificadas para fases posteriores. Actualmente solo se admiten conexiones Ethernet cableadas virtuales o físicas.",
      desc_bare_metal: "Listo para arrancar en metal real mediante UEFI. Se ha probado con éxito en el ordenador del desarrollador principal (CPU Intel + gráfica NVIDIA + Ethernet Intel).",
      desc_vbox: "Compatibilidad con VirtualBox/VMware parcial. Se pueden presentar fallos menores en la emulación de energía ACPI y en el ratón PS/2.",
      
      notes_stable: "Totalmente estable en pruebas automatizadas.",
      notes_riscv: "Probar vía 'make run ARCH=riscv64'.",
      notes_arm64: "Fase de diseño e inicialización de MMU.",
      notes_nvidia: "Requiere cargar el driver en rboot.conf.",
      notes_graphics_wip: "Aceleración 2D/3D no disponible.",
      notes_net_wip: "Transmisión básica operativa, recepción inestable.",
      notes_net_planned: "Requiere pila de red 802.11.",
      notes_bare_metal: "Grabar imagen EFI en un USB y arrancar.",
      notes_vbox: "Se recomienda usar QEMU para pruebas estables."
    },
    en: {
      status_supported: "Compatible",
      status_wip: "In Development",
      status_planned: "Planned",
      
      desc_supported_default: "This combination is fully supported. The Eclipse OS kernel will boot correctly and load the user-space network and graphics drivers.",
      desc_riscv64: "RISC-V 64-bit support is under active development. Eclipse OS compiles and boots in QEMU Virt, but some network drivers and peripherals are not fully integrated yet.",
      desc_aarch64: "ARM64 architecture is planned in our roadmap. Currently the kernel does not compile natively for aarch64. Contributions in this area are welcome!",
      desc_nvidia: "x86_64 architecture with user-space NVIDIA GPU support. Ideal for experimental user interface development.",
      desc_qemu_graphics: "Standard x86_64 combination and QEMU VGA graphics. This is the recommended virtual environment for testing and debugging the microkernel.",
      desc_graphics_wip: "Graphics drivers for Intel HD and AMD Radeon are under development. The kernel will fall back to simple UEFI VESA framebuffer mode (basic graphical console).",
      desc_net_wip: "Support for Realtek RTL8139 cards is in development. The driver is currently in basic testing phase.",
      desc_net_planned: "Wireless Wi-Fi connections are planned for later phases. Currently only virtual or physical wired Ethernet connections are supported.",
      desc_bare_metal: "Ready to boot on real hardware via UEFI. Successfully tested on the main developer's computer (Intel CPU + NVIDIA GPU + Intel Ethernet).",
      desc_vbox: "Partial compatibility with VirtualBox/VMware. Minor issues may occur with ACPI power emulation and PS/2 mouse.",
      
      notes_stable: "Fully stable in automated test runs.",
      notes_riscv: "Test via 'make run ARCH=riscv64'.",
      notes_arm64: "Design phase & MMU initialization.",
      notes_nvidia: "Requires loading the driver in rboot.conf.",
      notes_graphics_wip: "2D/3D acceleration not available.",
      notes_net_wip: "Basic transmission works, reception unstable.",
      notes_net_planned: "Requires 802.11 network stack.",
      notes_bare_metal: "Burn EFI image to a USB drive and boot.",
      notes_vbox: "QEMU is recommended for stable testing."
    }
  };

  function updateMatrix() {
    const cpu = cpuSelect.value;
    const gpu = gpuSelect.value;
    const net = netSelect.value;
    const platform = platformSelect.value;
    const lang = currentLanguage;

    // Display title
    resultTitle.textContent = `${cpu} + ${gpuSelect.options[gpuSelect.selectedIndex].text} + ${netSelect.options[netSelect.selectedIndex].text}`;

    let status = "supported";
    let desc = DATA[lang].desc_supported_default;
    let driver = "intel_e1000.drv + standard_vga";
    let mode = "UEFI Boot / Virt Mode";
    let notes = DATA[lang].notes_stable;

    // Evaluate CPU first
    if (cpu === "riscv64") {
      status = "wip";
      desc = DATA[lang].desc_riscv64;
      driver = "riscv64_core + virt_net";
      mode = "SBI Boot / Virt Mode";
      notes = DATA[lang].notes_riscv;
    } else if (cpu === "aarch64") {
      status = "planned";
      desc = DATA[lang].desc_aarch64;
      driver = "aarch64_core (planned)";
      mode = "Direct Boot (planned)";
      notes = DATA[lang].notes_arm64;
    } else {
      // CPU is x86_64
      // Check GPU
      if (gpu === "nvidia") {
        status = "supported";
        desc = DATA[lang].desc_nvidia;
        driver = "nvidia_gpu.drv (user-space)";
        mode = "UEFI / Nouveau-compat";
        notes = DATA[lang].notes_nvidia;
      } else if (gpu === "qemu") {
        status = "supported";
        desc = DATA[lang].desc_qemu_graphics;
        driver = "standard_vga";
        mode = "UEFI / Virt Mode";
        notes = DATA[lang].notes_stable;
      } else if (gpu === "amd" || gpu === "intel") {
        status = "wip";
        desc = DATA[lang].desc_graphics_wip;
        driver = "vesa_framebuffer";
        mode = "UEFI / Fallback VESA";
        notes = DATA[lang].notes_graphics_wip;
      }

      // Check Net
      if (net === "realtek") {
        if (status === "supported") {
          status = "wip";
          desc = DATA[lang].desc_net_wip;
          driver = "rtl8139.drv";
          notes = DATA[lang].notes_net_wip;
        }
      } else if (net === "wifi") {
        status = "planned";
        desc = DATA[lang].desc_net_planned;
        driver = "none (planned)";
        notes = DATA[lang].notes_net_planned;
      }

      // Check Platform
      if (platform === "bare_metal") {
        if (status === "supported") {
          desc = DATA[lang].desc_bare_metal;
          mode = "UEFI / Bare Metal";
          notes = DATA[lang].notes_bare_metal;
        }
      } else if (platform === "vbox") {
        if (status === "supported") {
          status = "wip";
          desc = DATA[lang].desc_vbox;
          driver = driver + " + acpi_fallback";
          mode = "UEFI / VBox Virt";
          notes = DATA[lang].notes_vbox;
        }
      }
    }

    // Set badge text & styles
    statusBadge.className = "compat-status";
    if (status === "supported") {
      statusBadge.classList.add("status-supported");
      statusBadge.textContent = DATA[lang].status_supported;
    } else if (status === "wip") {
      statusBadge.classList.add("status-wip");
      statusBadge.textContent = DATA[lang].status_wip;
    } else {
      statusBadge.classList.add("status-planned");
      statusBadge.textContent = DATA[lang].status_planned;
    }

    // Set other text
    resultDesc.textContent = desc;
    driverVal.textContent = driver;
    modeVal.textContent = mode;
    notesVal.textContent = notes;
  }

  cpuSelect.addEventListener("change", updateMatrix);
  gpuSelect.addEventListener("change", updateMatrix);
  netSelect.addEventListener("change", updateMatrix);
  platformSelect.addEventListener("change", updateMatrix);

  // Hook translation triggers to refresh text values
  window.addEventListener("languageChanged", updateMatrix);

  updateMatrix();
}

// Interactive Architecture Diagram Logic
let selectedArchComponent = null;
function initArchitectureDiagram() {
  const components = document.querySelectorAll(".arch-component");
  const detailsTitle = document.getElementById("arch-details-title");
  const detailsDesc = document.getElementById("arch-details-desc");
  const detailsPlaceholder = document.getElementById("arch-details-placeholder");
  const detailsContent = document.getElementById("arch-details-content");

  if (!components.length || !detailsTitle || !detailsDesc) return;

  function updateDetails(componentId) {
    selectedArchComponent = componentId;
    components.forEach(c => {
      if (c.getAttribute("data-arch") === componentId) {
        c.classList.add("selected");
      } else {
        c.classList.remove("selected");
      }
    });

    const lang = currentLanguage;
    const titleKey = `arch_title_${componentId.replace(/-/g, "_")}`;
    const descKey = `arch_desc_${componentId.replace(/-/g, "_")}`;

    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][titleKey]) {
      detailsPlaceholder.style.display = "none";
      detailsContent.style.display = "block";
      detailsTitle.innerHTML = TRANSLATIONS[lang][titleKey];
      detailsDesc.innerHTML = TRANSLATIONS[lang][descKey];
    }
  }

  components.forEach(c => {
    c.addEventListener("click", () => {
      const compId = c.getAttribute("data-arch");
      updateDetails(compId);
    });
  });

  window.addEventListener("languageChanged", () => {
    if (selectedArchComponent) {
      updateDetails(selectedArchComponent);
    } else {
      const lang = currentLanguage;
      const selectText = document.querySelector("#arch-details-placeholder p");
      if (selectText) {
        selectText.innerHTML = TRANSLATIONS[lang]["arch_details_select"];
      }
    }
  });
}

// DOM Setup
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");
  
  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  const langSwitcher = document.getElementById("lang-switcher");
  langSwitcher.addEventListener("click", () => {
    const targetLang = currentLanguage === "es" ? "en" : "es";
    setLanguage(targetLang);
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tabId = btn.getAttribute("data-tab");
      runTerminalSimulation(tabId);
    });
  });

  setLanguage(currentLanguage);
  initFAQ();
  initScrollObserver();
  initSpaceBackground();
  initConfigurator();
  initInteractiveTerminal();
  initHardwareMatrix();
  initArchitectureDiagram();
});
