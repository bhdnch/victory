const burgerWrapper = document.querySelector(".intro__burger__wrapper");
const burger = document.querySelector(".intro__burger");
const burgerMenu = document.querySelector(".intro__burger-menu");

burgerWrapper.onclick = () => {
    burger.classList.toggle("menu-on");
    burgerMenu.classList.toggle("intro__burger-menu_open");
};
