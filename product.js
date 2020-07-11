const HAMBURGER = document.querySelector(".hamburger");
const SIDENAV = document.querySelector(".side-nav");

HAMBURGER.addEventListener("click", (e) => {
    HAMBURGER.classList.toggle("hamburgerCancel");
    SIDENAV.classList.toggle("hideSideNav");
})