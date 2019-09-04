const hamburger = document.querySelector('.hamburger');
const slider = document.querySelector('.slider');

let isNavToggled = false;

hamburger.addEventListener('click', hamburgerAnimation, false);
slider.addEventListener('click', toggleSlider, false);

function hamburgerAnimation(){
    hamburger.classList.toggle('animate'); //temp - do changes later
    toggleSlider();
}

function toggleSlider(){
    if(!isNavToggled){
        slider.classList.remove('close');
        slider.classList.add('open');
        isNavToggled = true;
    } else {
        slider.classList.remove('open');
        slider.classList.add('close');
        isNavToggled = false;
    }
}
