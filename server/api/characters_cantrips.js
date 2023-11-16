const express = require("express");
const router = express.Router();

const {
    getAllCharacters_Cantrips,
    getCharacters_CantripsById,
    createCharacters_Cantrips,
    deleteCharacters_Cantrips,
} = require("../db/helpers/characters_cantrips");

//GET - /api/characters_cantrips - get all characters_cantrips
router.get("/", async (req, res, next) => {
    try {
        console.log("api line 12");
        const characters_cantrips = await getAllCharacters_Cantrips();
        res.send(characters_cantrips);
    } catch (error) {
        next(error);
    }
});

// GET - /api/spells/:id - get characters_cantrips by character id
router.get("/:id", async (req, res, next) => {
    try {
        const character_cantrips = await getCharacters_CantripsById(
            req.params.id
        );
        res.send(character_cantrips);
    } catch (error) {
        next(error);
    }
});

// POST

router.post("/", async (req, res, next) => {
    try {
        const characters_cantrip = await createCharacters_Cantrips(req.body);
        res.send(characters_cantrip);
    } catch (error) {
        next(error);
    }
});

//DELETE

router.delete("/:id", async (req, res, next) => {
    try {
        const characters_cantrip = await deleteCharacters_Cantrips(
            req.params.id
        );
        res.send(characters_cantrip);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
