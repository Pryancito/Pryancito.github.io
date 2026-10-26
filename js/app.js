// Aparición suave de las secciones al hacer scroll
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Visor de capturas de la galería
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
const boxText = box.querySelector('p');

document.querySelectorAll('.gallery figure').forEach((fig) => {
  fig.addEventListener('click', () => {
    const img = fig.querySelector('img');
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    boxText.textContent = fig.querySelector('figcaption')?.textContent || '';
    box.classList.add('open');
  });
});

box.addEventListener('click', () => box.classList.remove('open'));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') box.classList.remove('open');
});
