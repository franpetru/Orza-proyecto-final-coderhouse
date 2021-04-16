const navToggle = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".nav__container")
const section = document.querySelector(".main__container")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__container--visible");
    section.classList.toggle("main__container--novisible");
});