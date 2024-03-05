const express = require("express");
const router = express.Router();

const {
    getAllCharactersCantrips,
    getCharactersCantripsByCharacterId,
    createCharacterCantrip,
    deleteCharacterCantrip,
    getCharactersCantripsByCharactersCantripsId,
} = require("../db/helpers/characters_cantrips");

//GET - /api/characters_cantrips - get all characters_cantrips
router.get("/", async (req, res, next) => {
    try {
        console.log("api getting all characters cantrips");
        const characters_cantrips = await getAllCharactersCantrips();
        res.send(characters_cantrips);
    } catch (error) {
        next(error);
    }
});

// GET - /api/characters_cantrips/:character_id - get characters_cantrips by character id
router.get("/:character_id", async (req, res, next) => {
    try {
        const charCantrips = await getCharactersCantripsByCharacterId(
            req.params.character_id
        );
        res.send(charCantrips);
    } catch (error) {
        next(error);
    }
});

// GET - /api/characters_cantrips/characters_cantrips/:characters_cantrips_id - get characters_cantrips by characters_cantrips_id
router.get(
    "/characters_cantrips/:characters_cantrips_id",
    async (req, res, next) => {
        try {
            console.log(
                "entering api/characters_cantrips/:characters_cantrips_id router"
            );
            // console.log("param id", req.params.characters_cantrips_id);
            const charCantrips =
                await getCharactersCantripsByCharactersCantripsId(
                    req.params.characters_cantrips_id
                );
            res.send(charCantrips);
        } catch (error) {
            next(error);
        }
    }
);

// POST

router.post("/", async (req, res, next) => {
    try {
        const charCantrip = await createCharacterCantrip(req.body);
        res.send(charCantrip);
    } catch (error) {
        next(error);
    }
});

//DELETE - /api/characters_cantrips/characters_cantrips/:charcters_cantrips_id deletes cantrip from spellbook
router.delete(
    "/characters_cantrips/:characters_cantrips_id",
    async (req, res, next) => {
        try {
            const charCantrip = await deleteCharacterCantrip(
                req.params.characters_cantrips_id
            );
            res.send(charCantrip);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;

