const express = require("express");
const router = express.Router();

const {
     getAllSpellbooks_Cantrips,
     getSpellbooks_CantripsById,
} = require("../db/helpers/spellbooks_cantrips");

//GET - /api/spellbooks_cantrips - get all spellbooks_cantrips
router.get("/", async (req, res, next) => {
     try {
          console.log("api line 12");
          const spellbooks_cantrips = await getAllSpellbooks_Cantrips();
          res.send(spellbooks_cantrips);
     } catch (error) {
          next(error);
     }
});

// GET - /api/spells/:id - get spellbooks_cantrips by SPELLBOOK id
router.get("/:id", async (req, res, next) => {
     try {
          const spellbook_cantrips = await getSpellbooks_CantripsById(
               req.params.id
          );
          res.send(spellbook_cantrips);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
