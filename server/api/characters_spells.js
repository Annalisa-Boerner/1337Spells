const express = require("express");
const router = express.Router();

const {
    getAllCharacters_Spells,
    getCharacters_SpellsByCharacterId,
    createCharacter_Spell,
    deleteCharacter_Spell,
} = require("../db/helpers/characters_spells");

//GET - /api/characters_spells - get all characters_spells
router.get("/", async (req, res, next) => {
    try {
        console.log("entering get all characters_spells");
        const characters_spells = await getAllCharacters_Spells();
        res.send(characters_spells);
    } catch (error) {
        next(error);
    }
});

// GET - /api/spells/:character_id - get characters_spells by character id
router.get("/:character_id", async (req, res, next) => {
    try {
        console.log("entering api/characters_spells/:character_id router");
        console.log("param id", req.params.character_id);
        const charSpells = await getCharacters_SpellsByCharacterId(
            req.params.character_id
        );
        res.send(charSpells);
    } catch (error) {
        next(error);
    }
});

// POST

router.post("/", async (req, res, next) => {
    try {
        const charSpell = await createCharacter_Spell(req.body);
        res.send(charSpell);
    } catch (error) {
        next(error);
    }
});

//DELETE

router.delete("/:spell_id", async (req, res, next) => {
    try {
        const charSpell = await deleteCharacter_Spells(req.params.spell_id);
        res.send(charSpell);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
