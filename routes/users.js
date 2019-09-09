var express = require("express");
var router = express.Router();

const user_controller = require("../controllers/userController");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/registration/success", user_controller.user_create_post);

module.exports = router;
