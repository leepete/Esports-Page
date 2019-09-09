const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  organisation: String,
  email: String,
  league: String
});

module.exports = mongoose.model("User", userSchema);
