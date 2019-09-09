var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Wellington E-Sports Association" });
});

// TODO: Fix up the routing below

/* GET About Us page. */
router.get("/about", function(req, res, next) {
  res.render("about", { title: "About Us" });
});

/* GET Registration page. */
router.get("/registration", function(req, res, next) {
  res.render("registration", {
    title: "Registration",
    //TO FIX: use DB
    games: [
      { game: "Counter Strike: Global Offensive", abbr: "CS:GO" },
      { game: "League of Legends", abbr: "LOL" },
      { game: "Overwatch", abbr: "OW" },
      { game: "Dota 2", abbr: "DOTA" },
      { game: "Starcraft II", abbr: "SC2" },
      { game: "Rocket League", abbr: "RL" },
      { game: "PlayerUnknown's Battlegrounds", abbr: "PUBG" },
      { game: "Fortnite", abbr: "FN" }
    ]
  });
});

/* GET Leagues page. */
router.get("/leagues", function(req, res, next) {
  //TOFIX retrieve from model
  res.render("leagues", {
    title: "Leagues",
    games: [
      "CS:GO",
      "LoL",
      "OW",
      "Dota 2",
      "Starcraft",
      "Fortnite",
      "Super Smash"
    ]
  });
});

/* GET Events page. */
router.get("/events", function(req, res, next) {
  res.render("events", { title: "Events" });
});

/* GET Regulations page. */
router.get("/regulations", function(req, res, next) {
  res.render("regulations", { title: "Regulations" });
});

/* GET Media page. */
router.get("/media", function(req, res, next) {
  res.render("media", { title: "Media" });
});

/* GET Contact page. */
router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "Contact Us" });
});

module.exports = router;
