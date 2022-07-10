const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if(navMenu){
    console.log(navMenu)
}

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Abrir menú");
    console.log("close")
  } else {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    console.log("open")
  }
});