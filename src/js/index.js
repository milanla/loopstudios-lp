const navBtn = document.querySelector(".js-nav-btn");
const menu = document.querySelector(".menu__list");

function toggleMenu() {
  if (window.innerWidth < 768) {
    navBtn.classList.toggle("menu__btn_close");
    menu.classList.toggle("menu__list-active");
  }
}

navBtn.addEventListener("click", toggleMenu);
