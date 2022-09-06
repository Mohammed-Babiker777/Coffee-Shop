let navbar = document.querySelector(".navbar");
let menuBars = document.querySelector(".menu-bars");
let form = document.querySelector(".form");
let searchIcon = document.querySelector(".search");
let close = document.querySelector(".fa-times");

// Display Menu
menuBars.addEventListener("click", () => {
    menuBars.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

// Display Section Search
searchIcon.addEventListener("click", () => {
    form.classList.toggle("visible");
});
// Close Section Search
close.addEventListener("click", () => {
    form.classList.remove("visible");
})
