// Seleccionar elementos
const menuToggle = document.getElementById("menu-toggle");
const offcanvasMenu = document.getElementById("offcanvas-menu");

// Abrir/cerrar menú lateral
menuToggle.addEventListener("click", () => {
  offcanvasMenu.classList.toggle("active");
});

// Cerrar menú cuando se haga clic en un enlace (opcional)
offcanvasMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    offcanvasMenu.classList.remove("active");
  });
});

// Carrusel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
});

// Auto-play
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 5000);

window.addEventListener('resize', updateCarousel);