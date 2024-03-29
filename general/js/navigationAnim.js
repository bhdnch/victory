let lastScroll = 0;
const defaultOffset = 0;
const header = document.querySelector(".intro__nav");
const hr = document.querySelector(".intro__hr");

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("intro__nav-small");

window.addEventListener("scroll", handleScroll);

function handleScroll() {
    const currentScroll = scrollPosition();

    if (currentScroll > 0 && !containHide()) {
        //scroll down
        header.classList.add("intro__nav-small");
        hr.classList.add("hideHR");
    } else if (currentScroll < 1 && containHide()) {
        //scroll up
        header.classList.remove("intro__nav-small");
        hr.classList.remove("hideHR");
    }
    lastScroll = currentScroll;
}
