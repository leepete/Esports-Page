const User = require("../models/user");

exports.user_create_post = function(req, res, next) {
  const user = new User({
    name: req.body.name,
    organisation: req.body.organisation,
    email: req.body.email,
    league: req.body.league
  });
  user
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST requests to /user",
    createdUser: user
  });
};
