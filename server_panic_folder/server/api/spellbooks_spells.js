const express = require("express");
const router = express.Router();

const {
     getAllSpellbooks_Spells,
     getSpellbooks_SpellsById,
} = require("../db/helpers/spellbooks_spells");

//GET - /api/spellbooks_cantrips - get all spellbooks_cantrips
router.get("/", async (req, res, next) => {
     try {
          console.log("api line 12");
          const spellbooks_spells = await getAllSpellbooks_Spells();
          res.send(spellbooks_spells);
     } catch (error) {
          next(error);
     }
});

// GET - /api/spells/:id - get spellbooks_cantrips by SPELLBOOK id
router.get("/:id", async (req, res, next) => {
     try {
          const spellbook_spells = await getSpellbooks_SpellsById(
               req.params.id
          );
          res.send(spellbook_spells);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
