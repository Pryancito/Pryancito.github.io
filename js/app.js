// Cielo estrellado con parpadeo suave
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let stars = [];

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.round((innerWidth * innerHeight) / 5000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.2 + 0.2,
    a: Math.random() * Math.PI * 2,
    s: Math.random() * 0.02 + 0.004,
  }));
}

function draw() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (const st of stars) {
    st.a += st.s;
    ctx.globalAlpha = 0.35 + Math.sin(st.a) * 0.3;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
    ctx.fill();
  }
  if (!still) requestAnimationFrame(draw);
}
resize();
draw();
addEventListener('resize', () => { resize(); if (still) draw(); });

// Barra de navegación opaca al hacer scroll
const nav = document.getElementById('nav');
const onScroll = () => nav && nav.classList.toggle('scrolled', scrollY > 20);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Aparición suave de las secciones
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Brillo que sigue al ratón en las tarjetas
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// Escaparate de capturas con pestañas
const tabs = [...document.querySelectorAll('.tab')];
const shots = [...document.querySelectorAll('.shot')];
const descs = [...document.querySelectorAll('.desc')];
const label = document.getElementById('shot-label');
let current = 0;
let timer;
const box = document.getElementById('lightbox');

function show(i) {
  current = i;
  tabs.forEach((t, j) => t.classList.toggle('active', j === i));
  shots.forEach((s, j) => s.classList.toggle('active', j === i));
  descs.forEach((d, j) => d.classList.toggle('active', j === i));
  label.textContent = tabs[i].textContent.toLowerCase();
}

function autoplay() {
  clearInterval(timer);
  if (!still) timer = setInterval(() => show((current + 1) % tabs.length), 6000);
}

tabs.forEach((t, i) => t.addEventListener('click', () => { show(i); autoplay(); }));
if (tabs.length) autoplay();

// Visor a pantalla completa
if (box) {
  const boxImg = box.querySelector('img');
  document.querySelector('.shots').addEventListener('click', () => {
    boxImg.src = shots[current].src;
    boxImg.alt = shots[current].alt;
    box.classList.add('open');
    clearInterval(timer);
  });
  box.addEventListener('click', () => { box.classList.remove('open'); autoplay(); });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && box.classList.contains('open')) { box.classList.remove('open'); autoplay(); }
  });
}
