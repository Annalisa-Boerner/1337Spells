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

//GET spells/cantrips to and from spellbook
router.use("/spellbooks", require("./spellbooks"));

router.use("/spellbooks_cantrips", require("./spellbooks_cantrips"));

router.use("/spellbooks_spells", require("./spellbooks_spells"));

//GET spells that exist
//POST, PUT, and DELETE homebrew
router.use("/spells", require("./spells"));

//

module.exports = router;
