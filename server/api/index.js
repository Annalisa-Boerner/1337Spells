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

//GET characters that exist
router.use("/characters", require("./characters"));

// //Login stuff
// router.use("/login", require("./login"));

// //Register stuff
// router.use("/register", require("./register"));

//GET spells/cantrips to and from spellbook
router.use("/spellbook", require("./spellbook"));

//GET spells that exist
//POST and DELETE homebrew
router.use("/spells", require("./spells"));

module.exports = router;
