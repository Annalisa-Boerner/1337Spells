const express = require("express");
const router = express.Router();

const {
     getCharacterById,
     getAllCharacters,
} = require("../db/helpers/characters");

//GET - /api/characters - get all characters
router.get("/", async (req, res, next) => {
     try {
          const characters = await getAllCharacters();
          res.send(characters);
     } catch (error) {
          next(error);
     }
});

// GET - /api/characters/:id - get a single character
router.get("/:id", async (req, res, next) => {
     try {
          const character = await getCharacterById(req.params.id);
          res.send(character);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
