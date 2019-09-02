var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wellington Esports Association' });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us' });
});

/* GET Registration page. */
router.get('/registration', function(req, res, next) {
  res.render('index', { title: 'Registration' });
});

/* GET Leagues page. */
router.get('/leagues', function(req, res, next) {
  res.render('index', { title: 'Leagues' });
});

/* GET Events page. */
router.get('/events', function(req, res, next) {
  res.render('index', { title: 'Events' });
});

/* GET Regulations page. */
router.get('/regulations', function(req, res, next) {
  res.render('index', { title: 'Regulations' });
});

/* GET Media page. */
router.get('/media', function(req, res, next) {
  res.render('index', { title: 'Media' });
});

/* GET  page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

// /* GET  page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: '' });
// });

module.exports = router;
