const express = require("express");
const router = express.Router();

//GET /api/health
router.get("/health", (req, res, next) => {
    res.send("ok");
});

//ROUTER: /api/<xyz>
//First part of any endpoint is /api
//In alpha order

//GET and POST- get current status, post a change
router.use("/arcanerecoveries", require("./arcanerecovery"));

//GET cantrips that exist
router.use("/cantrips", require("./cantrips"));

//GET characters that exist; also auth through here
router.use("/characters", require("./characters"));

//ROUTER: /api/characters_cantrips
router.use("/characters_cantrips", require("./characters_cantrips"));

//ROUTER: /api/characters_spells
router.use("/characters_spells", require("./characters_spells"));

//GET spells that exist
//POST, PUT, and DELETE homebrew
router.use("/spells", require("./spells"));

//

module.exports = router;
