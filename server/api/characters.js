const express = require("express");
const router = express.Router();
const { JWT_SECRET } = require("../secrets");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const {
     createCharacter,
     getCharacterByUsername,
} = require("../db/helpers/characters");

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

// router.get("/", async (req, res, next) => {
//      try {
//           res.send("wow, a thing!");
//      } catch (error) {
//           next(error);
//      }
// });

router.post("/register", async (req, res, next) => {
     try {
          const { username, password, name } = req.body;
          const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
          const character = await createCharacter({
               username,
               password: hashedPassword,
               name,
          });
          delete character.password;

          const token = jwt.sign(character, JWT_SECRET);

          res.cookie("token", token, {
               sameSite: "strict",
               httpOnly: true,
               signed: true,
          });

          res.send({ token, character });
     } catch (error) {
          next(error);
     }
});

router.post("/login", async (req, res, next) => {
     try {
          const { username, password, name } = req.body;
          console.log("req.body ", req.body);
          const character = await getCharacterByUsername(username);
          console.log("character ", character);
          const validPassword = await bcrypt.compare(
               password,
               character.password
          );
          console.log("validPassword ", validPassword);
          delete character.password;

          if (validPassword) {
               const token = jwt.sign(character, JWT_SECRET);

               res.cookie("token", token, {
                    sameSite: "strict",
                    httpOnly: true,
                    signed: true,
               });
               delete character.password;
               res.send({ token, character });
          }
     } catch (error) {
          next(error);
     }
});

router.post("/logout", async (req, res, next) => {
     try {
          res.clearCookie("token", {
               sameSite: "strict",
               httpOnly: true,
               signed: true,
          });
          res.send({
               loggedIn: false,
               message: "logged out",
          });
     } catch (error) {
          next(error);
     }
});

module.exports = router;
