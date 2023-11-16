const express = require("express");
const router = express.Router();

const {
    getAllCharacters_Spells,
    getCharacters_SpellsById,
    createCharacters_Spells,
    deleteCharacters_Spells,
} = require("../db/helpers/characters_spells");

//GET - /api/characters_cantrips - get all characters_cantrips
router.get("/", async (req, res, next) => {
    try {
        console.log("api line 12");
        const characters_spells = await getAllCharacters_Spells();
        res.send(characters_spells);
    } catch (error) {
        next(error);
    }
});

// GET - /api/spells/:id - get characters_cantrips by character id
router.get("/:id", async (req, res, next) => {
    try {
        const character_spells = await getCharacters_SpellsById(req.params.id);
        res.send(character_spells);
    } catch (error) {
        next(error);
    }
});

// POST

router.post("/", async (req, res, next) => {
    try {
        const characters_spell = await createCharacters_Spells(req.body);
        res.send(characters_spell);
    } catch (error) {
        next(error);
    }
});

//DELETE

router.delete("/:id", async (req, res, next) => {
    try {
        const characters_spell = await deleteCharacters_Spells(req.params.id);
        res.send(characters_spell);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
