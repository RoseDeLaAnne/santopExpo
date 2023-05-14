const body = document.getElementsByTagName("body")[0];

const menu = document.querySelector(".menu");
const menuContent = document.querySelector(".menu-content");
const menuContentClose = document.querySelector(".menu-content__close");

menu.addEventListener("click", () => {
    body.classList.toggle("no-scroll");
    menuContent.classList.toggle("menu-content_active");
});

menuContentClose.addEventListener("click", () => {
    body.classList.remove("no-scroll");
    menuContent.classList.remove("menu-content_active");
});
