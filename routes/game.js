const express = require("express");
const router = express.Router();

const gameController = require("../controllers/gameController");

router.get("/", gameController.game_get);
