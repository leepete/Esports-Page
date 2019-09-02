const hamburger = document.querySelector('.hamburger');
// const navbar = document.querySelector('.navbar');
const navbarOptions = document.querySelector('.navbar-ul-options'); //queryselect all ul?

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change"); //temp - do changes later
    navbarOptions.classList.toggle('nav-bar-toggle');
});