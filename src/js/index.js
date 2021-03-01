const navBtn = document.querySelector(".js-nav-btn"),
  menu = document.querySelector(".menu__list"),
  body = document.querySelector("body");

function toggleMenu() {
  if (window.innerWidth < 768) {
    navBtn.classList.toggle("menu__btn_close");
    menu.classList.toggle("menu__list-active");
    body.classList.toggle("has-modal-open");
  }
}

navBtn.addEventListener("click", toggleMenu);
