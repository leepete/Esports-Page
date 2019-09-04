//Main Variables
const body = document.body;

// Header Variables
const hamburger = document.querySelector('.hamburger');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#navbar-logo');
const navbarListItem = document.querySelectorAll('.slider ul li');

let isNavToggled = false;
let currentHref = '/';

function start(){
    setupEventListeners();
}

function setupEventListeners(){
    hamburger.addEventListener('click', hamburgerAnimation, false);
    slider.addEventListener('click', toggleSlider, false);
    logo.addEventListener('click', returnToPage, false);

    navbarListItem.forEach(listOption => {
        listOption.addEventListener('click', returnToPage, false);
    });
}

function hamburgerAnimation(){
    hamburger.classList.add('animate'); 
    toggleSlider();
}

function toggleSlider(){
    if(!isNavToggled){
        slider.classList.remove('close');

        slider.classList.add('open');
        body.classList.add('no-scroll');

        isNavToggled = true;
    } else {
        slider.classList.remove('open');
        hamburger.classList.remove('animate');
        body.classList.remove('no-scroll');

        slider.classList.add('close');
        isNavToggled = false;
    }
}

function returnToPage(event){
    let getTarget = event.target;
    if(getTarget.innerText === ""){
        if(getTarget.id === "navbar-logo"){
            currentHref = getPageHref('Home');
        }
    } else {
        currentHref = getPageHref(getTarget.innerText);
    }
    window.location.href = currentHref;
}

function getPageHref(href){
    switch(href){
        case 'Home':
            return '/';
        case 'About Us':
            return '/about';
        case 'Registration':
            return '/registration';
        case 'Leagues':
            return '/leagues';
        case 'Events':
            return '/events';
        case 'Regulations':
            return '/regulations';
        case 'Media':
            return '/media';
        case 'Contact Us':
            return '/contact';
        default:
            return '/404';
   }
} 


start();