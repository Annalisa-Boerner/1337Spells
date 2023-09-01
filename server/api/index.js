const express = require("express");
const router = express.Router();

//ROUTER: /api/<xyz>
//First part of any endpoint
router.use("/spellbook", require("./spellbook"));

router.use("/arcaneRecovery", require("./arcaneRecovery"));

router.use("");

module.exports = router;
