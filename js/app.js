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
    footer_copy: "&copy; 2026 Eclipse OS Project. Distributed under the MIT & Apache 2.0 Licenses."
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
    footer_copy: "&copy; 2026 Proyecto Eclipse OS. Distribuido bajo las licencias MIT y Apache 2.0."
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

// Interactive rboot.conf Configurator Widget Logic
function initConfigurator() {
  const procSelect = document.getElementById("config-proc");
  const customProcInput = document.getElementById("config-custom-proc");
  const customProcContainer = document.getElementById("config-custom-proc-container");
  const logSelect = document.getElementById("config-log");
  const outputSpan = document.getElementById("config-output");
  const copyBtn = document.getElementById("btn-copy-config");
  
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
});
