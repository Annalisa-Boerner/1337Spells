const express = require("express");
const router = express.Router();

const {
     createSpells,
     getAllSpells,
     getSpellById,
     deleteSpells,
} = require("../db/helpers/spells");

//GET - /api/spells - get all spells
router.get("/", async (req, res, next) => {
     try {
          const spells = await getAllSpells();
          res.send(spells);
     } catch (error) {
          next(error);
     }
});

// GET - /api/spells/:id - get spell by id
router.get("/:id", async (req, res, next) => {
     try {
          const spell = await getSpellById(req.params.id);
          res.send(spell);
     } catch (error) {
          next(error);
     }
});

// POST

router.post("/", async (req, res, next) => {
     try {
          const spell = await createSpells(req.body);
          res.send(spell);
     } catch (error) {
          next(error);
     }
});

//DELETE

router.delete("/:id", async (req, res, next) => {
     try {
          const spell = await deleteSpells(req.params.id);
          res.send(spell);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
