const hamburger_menu = document.querySelector("#hamburger-menu");
const close_menu = document.querySelector("#close-menu");
const menu = document.querySelector("#navmenu");

hamburger_menu.addEventListener("click", () => {
    menu.classList.add("show");
});

close_menu.addEventListener("click", () => {
    menu.classList.remove("show");
});




window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("hide");
});