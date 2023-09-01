const express = require("express");
const router = express.Router();

const { getCharacterById } = require("../db/helpers/characters");

//GET - /api/characters/:id - get a single character
router.get("/:id", async (req, res, next) => {
     try {
          const character = await getCharacterById(req.params.id);
          res.send(character);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
