var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Wellington E-Sports Association" });
});

/* GET About Us page. */
router.get("/about", function(req, res, next) {
  res.render("about", { title: "About Us" });
});

/* GET Registration page. */
router.get("/registration", function(req, res, next) {
  res.render("registration", {
    title: "Registration",
    image: "maybe insert object to loop over"
  });
});

/* GET Leagues page. */
router.get("/leagues", function(req, res, next) { //TOFIX retrieve from model
  res.render("leagues", { title: "Leagues", games: ["CS:GO", "LoL", "OW", "Dota 2", "Starcraft", "Fortnite", "Super Smash"] });
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

/* GET  page. */
router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "Contact Us" });
});

// /* GET  page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: '' });
// });

module.exports = router;
