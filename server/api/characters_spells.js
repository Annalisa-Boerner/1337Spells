const express = require("express");
const router = express.Router();

const {
    getAllCharactersSpells,
    getCharactersSpellsByCharacterId,
    createCharacterSpell,
    deleteCharacterSpell,
} = require("../db/helpers/characters_spells");

//GET - /api/characters_spells - get all characters_spells
router.get("/", async (req, res, next) => {
    try {
        console.log("entering get all characters_spells");
        const characters_spells = await getAllCharactersSpells();
        res.send(characters_spells);
    } catch (error) {
        next(error);
    }
});

// GET - /api/spells/:character_id - get characters_spells by character id
router.get("/:character_id", async (req, res, next) => {
    try {
        // console.log("entering api/characters_spells/:character_id router");
        // console.log("param id", req.params.character_id);
        const charSpells = await getCharactersSpellsByCharacterId(
            req.params.character_id
        );
        res.send(charSpells);
    } catch (error) {
        next(error);
    }
});

// POST add a spell to character's spellbook

router.post("/", async (req, res, next) => {
    try {
        const charSpell = await createCharacterSpell(req.body);
        res.send(charSpell);
    } catch (error) {
        next(error);
    }
});

//DELETE a spell from the character's spellbook

router.delete("/:spell_index", async (req, res, next) => {
    try {
        console.log("api characters_spells router.delete");
        const charSpell = await deleteCharacterSpell(req.params.spell_index);
        res.send(charSpell);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
