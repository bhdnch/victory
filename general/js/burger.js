document.querySelector(".burger-menu").onclick = func;

function func() {
    this.classList.toggle("menu-on");
    document.querySelector(".intro__burger__menu").classList.toggle("intro__burger__menu-open");
}
