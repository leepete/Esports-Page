//Main Variables
const body = document.body;

// Header Variables
const hamburger = document.querySelector(".hamburger");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#navbar-logo");
const navbarListItem = document.querySelectorAll(".slider ul li");

let isNavToggled = false;
let currentWindow = window.location.href;

function start() {
  setupEventListeners();
  popularGamesLoad(); //loads popular games showcase
}

function setupEventListeners() {
  hamburger.addEventListener("click", hamburgerAnimation, false);
  slider.addEventListener("click", toggleSlider, false);
  logo.addEventListener("click", returnToPage, false);

  navbarListItem.forEach(listOption => {
    listOption.addEventListener("click", returnToPage, false);
  });
}

function hamburgerAnimation() {
  hamburger.classList.add("animate");
  toggleSlider();
}

function toggleSlider() {
  if (!isNavToggled) {
    slider.classList.remove("close");

    slider.classList.add("open");
    body.classList.add("no-scroll"); //do not allow scrolling

    isNavToggled = true;
  } else {
    slider.classList.remove("open");
    hamburger.classList.remove("animate");
    body.classList.remove("no-scroll"); //allow scrolling

    slider.classList.add("close");
    isNavToggled = false;
  }
}

function returnToPage(event) {
  let getTarget = event.target;
  // let navbarIndex = getCurrentPageIndex(getTarget);

  if (getTarget.innerText === "") {
    // if logo is clicked instead of navbar
    if (getTarget.id === "navbar-logo") {
      currentWindow = getPageHref("Home");
      // navbarListItem[0].classList.toggle('currently-active-page');
    }
  } else {
    currentWindow = getPageHref(getTarget.innerText);
  }
  // navbarListItem[navbarIndex].classList.add('currently-active-page');
}

function getPageHref(href) {
  switch (href) {
    case "Home":
      return "/";
    case "About Us":
      return "/about";
    case "Registration":
      return "/registration";
    case "Leagues":
      return "/leagues";
    case "Events":
      return "/events";
    case "Regulations":
      return "/regulations";
    case "Media":
      return "/media";
    case "Contact Us":
      return "/contact";
    default:
      return "/404";
  }
}

// //Was planning to keep current page highlighted on navbar... need to figure out how
// function getCurrentPageIndex(target){
//     //call closest to get a refernce to li element
//     let li = target.closest('li');
//     //get an array reference of 'ul' children and pas in children HTMLCollection
//     let nodes = Array.from(li.closest('ul').children);
//     //return index
//     return nodes.indexOf(li);
// }

function popularGamesLoad() {
  try {
    if (currentWindow.slice(-1) === "/") {
      const gameContainer = document.querySelector(".popular-showcase-all");
      let mostPopularGames = [
        { game: "Dota 2", money: 216.3, players: 3359, tournaments: 1124 },
        {
          game: "Counter-Strike: Global Offensive",
          money: 80.7,
          players: 11988,
          tournaments: 4237
        },
        { game: "Fortnite", money: 74.9, players: 3085, tournaments: 423 },
        {
          game: "League of Legends",
          money: 69.3,
          players: 6601,
          tournaments: 2253
        },
        { game: "StarCraft II", money: 31, players: 1970, tournaments: 5561 }
      ];
      let mostPopularGamesImages = [
        "dota2",
        "csgo",
        "fortnite",
        "lol",
        "starcraft"
      ];
      let imgLocation = "../images/index/";

      for (let i = 0; i < mostPopularGames.length; i++) {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");

        div.style.backgroundImage =
          "url(" + imgLocation + mostPopularGamesImages[i] + ".jpg)";
        h1.innerText = mostPopularGames[i].game;
        p.innerText =
          "$" +
          mostPopularGames[i].money +
          " million \n" +
          mostPopularGames[i].players +
          " players \n" +
          mostPopularGames[i].tournaments +
          " tournaments";

        div.classList.add("game-showcase");
        h1.classList.add("game-header");
        p.classList.add("game-p");

        div.appendChild(h1);
        div.appendChild(p);

        gameContainer.appendChild(div);
      }
    }
  } catch (error) {
    throw new Error("Cannot load popular game showcase!");
  }
}

start();
