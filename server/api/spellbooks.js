const express = require("express");
const router = express.Router();

const {
     getAllSpellbooks,
     getSpellbookById,
} = require("../db/helpers/spellbooks");

//GET - /api/spellbooks - get all spellbooks
router.get("/", async (req, res, next) => {
     try {
          const spellbooks = await getAllSpellbooks();
          res.send(spellbooks);
     } catch (error) {
          next(error);
     }
});

// GET - /api/spellbooks/:id - get spell by id
router.get("/:id", async (req, res, next) => {
     try {
          const spellbook = await getSpellbookById(req.params.id);
          res.send(spellbook);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
