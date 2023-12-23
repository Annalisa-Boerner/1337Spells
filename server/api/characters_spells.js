const express = require("express");
const router = express.Router();

const {
    getAllCharactersSpells,
    getCharactersSpellsByCharacterId,
    createCharacterSpell,
    deleteCharacterSpell,
    getCharactersSpellsByCharactersSpellsId,
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

// GET - /api/characters_spells/:character_id - get characters_spells by character id
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

// GET - /api/characters_spells/characters_spells/:characters_spells_id - get characters_spells by characters_spells_id
router.get(
    "/characters_spells/:characters_spells_id",
    async (req, res, next) => {
        try {
            console.log(
                "entering api/characters_spells/:characters_spells_id router"
            );
            // console.log("param id", req.params.characters_spells_id);
            const charSpells = await getCharactersSpellsByCharactersSpellsId(
                req.params.characters_spells_id
            );
            res.send(charSpells);
        } catch (error) {
            next(error);
        }
    }
);

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

router.delete(
    "/characters_spells/:characters_spells_id",
    async (req, res, next) => {
        try {
            console.log("api characters_spells router.delete");
            const charSpell = await deleteCharacterSpell(
                req.params.characters_spells_id
            );
            res.send(charSpell);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
