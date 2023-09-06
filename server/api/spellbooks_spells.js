const express = require("express");
const router = express.Router();

const {
     getAllSpellbooks_Spells,
     getSpellbooks_SpellsById,
     createSpellbooks_Spells,
     deleteSpellbooks_Spells,
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

// POST

router.post("/", async (req, res, next) => {
     try {
          const spellbooks_spell = await createSpellbooks_Spells(req.body);
          res.send(spellbooks_spell);
     } catch (error) {
          next(error);
     }
});

//DELETE

router.delete("/:id", async (req, res, next) => {
     try {
          const spellbooks_spell = await deleteSpellbooks_Spells(req.params.id);
          res.send(spellbooks_spell);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
