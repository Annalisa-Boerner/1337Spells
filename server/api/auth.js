const bcrypt = require("bcrypt");
const {
     createCharacter,
     getCharacterById,
} = require("../db/helpers/characters");

const router = require("express").Router();

const SALT_ROUNDS = 10;

router.get("/", async (req, res, next) => {
     try {
          res.send("wow, a thing!");
     } catch (error) {
          next(error);
     }
});

router.post("/register", async (req, res, next) => {
     try {
          console.log(req.body);
          const { username, password, name } = req.body;
          const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
          console.log("hashed password ", hashedPassword);
          const character = await createCharacter({
               username,
               password: hashedPassword,
               name,
          });
          console.log("character ", character);
          delete character.password;

          res.send({ character });
     } catch (error) {
          next(error);
     }
});

router.post("/login", async (req, res, next) => {
     try {
     } catch (error) {
          next(error);
     }
});

router.post("/logout", async (req, res, next) => {
     try {
     } catch (error) {
          next(error);
     }
});

module.exports = router;
