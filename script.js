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
