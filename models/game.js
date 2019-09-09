var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  game: String,
  abbreviation: String
});

module.exports = mongoose.model("Game", GameSchema);
