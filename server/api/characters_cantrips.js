const express = require("express");
const router = express.Router();

const {
    getAllCharacters_Cantrips,
    getCharacters_CantripsByCharacterId,
    createCharacter_Cantrip,
    deleteCharacters_Cantrip,
} = require("../db/helpers/characters_cantrips");

//GET - /api/characters_cantrips - get all characters_cantrips
router.get("/", async (req, res, next) => {
    try {
        console.log("api getting all characters cantrips");
        const characters_cantrips = await getAllCharacters_Cantrips();
        res.send(characters_cantrips);
    } catch (error) {
        next(error);
    }
});

// GET - /api/characters_cantrips/:character_id - get characters_cantrips by character id
router.get("/:character_id", async (req, res, next) => {
    try {
        console.log("entering api/characters_cantrips/:character_id router");
        console.log("param id", req.params.character_id);
        const charCantrips = await getCharacters_CantripsByCharacterId(
            req.params.character_id
        );
        res.send(charCantrips);
    } catch (error) {
        next(error);
    }
});

// POST

router.post("/", async (req, res, next) => {
    try {
        const charCantrip = await createCharacter_Cantrip(req.body);
        res.send(charCantrip);
    } catch (error) {
        next(error);
    }
});

//DELETE - /api/characters_cantrips/:cantrip_id deletes cantrip from spellbook
router.delete("/:cantrip_id", async (req, res, next) => {
    try {
        const charCantrip = await deleteCharacters_Cantrip(
            req.params.cantrip_id
        );
        res.send(charCantrip);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
