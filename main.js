// Select the button and nav
const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav");

// When button is clicked, add class of .nav--visible
navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible')
});
