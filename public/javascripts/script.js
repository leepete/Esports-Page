//Main Variables
const body = document.body;
const desktopViewMinimum = 1025;

function start() {
  setupEventListeners();
  popularGamesShowcase();
}

function setupEventListeners() {
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelectorAll(".nav-links li");
  const logo = document.querySelector("#navbar-logo > img");

  hamburger.addEventListener("click", hamburgerAnimation, false);
  logo.addEventListener("click", returnToPage, false);

  links.forEach(listOption => {
    listOption.addEventListener("click", returnToPage, false);
  });

  window.addEventListener("resize", windowSizeListener, false);
}

function hamburgerAnimation() {
  const lines = document.querySelectorAll(".line1, .line2, .line3");
  lines.forEach(line => {
    line.classList.toggle("animate");
  });
  toggleNav();
}

function toggleNav() {
  const navLinks = document.querySelector(".nav-links");

  if (!hasNavClassExists(navLinks, "open")) {
    if (window.innerWidth <= desktopViewMinimum) {
      body.classList.add("no-scroll");
    }
    navLinks.classList.add("open");
  } else {
    body.classList.remove("no-scroll");
    navLinks.classList.remove("open");
  }
}

function hasNavClassExists(element, check) {
  if (element.classList.contains(check)) {
    return true;
  }
  return false;
}

function windowSizeListener() {
  if (window.innerWidth >= desktopViewMinimum) {
    body.classList.remove("no-scroll");
  } else {
    body.classList.add("no-scroll");
  }
}

function returnToPage(event) {
  let getTarget = event.currentTarget;
  if (getTarget.innerText === "") {
    if (getTarget.id === "logo") {
      // if logo is clicked instead of navbar, return home
      window.location.href = getPageHref("Home");
    }
  } else {
    window.location.href = getPageHref(getTarget.innerText);
  }
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
      throw new Error("Page does not exist!");
  }
}

function popularGamesShowcase() {
  try {
    if (window.location.href.slice(-1) === "/") {
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
