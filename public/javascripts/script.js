const hamburger = document.querySelector('.hamburger');
// const navbar = document.querySelector('.navbar');
const navbarOptions = document.querySelector('.navbar-ul-options'); //queryselect all ul?

let isNavToggled = false;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change"); //temp - do changes later
    navbarOptions.classList.toggle('nav-bar-toggle');
    isNavToggled = true;
});

// navbarOptions.addEventListener('click', (e) => {
//     console.log(e.target);
//     if(!e.target){
//         console.log("yes");
//     }
// });

// Close nav bar when clicking out of the navbar - TEMP WILL FIX
const b = document.querySelectorAll('section');
b.forEach((gett) =>{ 
    gett.addEventListener('click', (e) => {
        // console.log(e);
        if(isNavToggled) navbarOptions.classList.toggle('nav-bar-toggle');
    });
})
