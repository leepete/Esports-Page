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
        body.classList.add('no-scroll'); //do not allow scrolling

        isNavToggled = true;
    } else {
        slider.classList.remove('open');
        hamburger.classList.remove('animate');
        body.classList.remove('no-scroll'); //allow scrolling

        slider.classList.add('close');
        isNavToggled = false;
    }
}

function returnToPage(event){
    let getTarget = event.target;
    let navbarIndex = getCurrentPageIndex(getTarget);
    // debugger;
    // console.log(getCurrentPageIndex(getTarget));

    if(getTarget.innerText === ""){
        // if logo is clicked instead of navbar
        if(getTarget.id === "navbar-logo"){
            currentHref = getPageHref('Home');
            // navbarListItem[0].classList.toggle('currently-active-page');
        }
    } else {
        //get the href from the clicked navbar option
        currentHref = getPageHref(getTarget.innerText);
        // navbarListItem[navbarIndex].classList.toggle('currently-active-page');
    }
    //redirect the page
    window.location.href = currentHref;

    // window.location.href = currentHref;
    // navbarListItem[navbarIndex].classList.add('currently-active-page');
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

//Was planning to keep current page highlighted on navbar... need to figure out how
function getCurrentPageIndex(target){
    //call closest to get a refernce to li element
    let li = target.closest('li');
    //get an array reference of 'ul' children and pas in children HTMLCollection
    let nodes = Array.from(li.closest('ul').children);
    //return index
    return nodes.indexOf(li);
}



start();