const express = require("express");
const router = express.Router();

const { getAllCantrips, getCantripById } = require("../db/helpers/cantrips");

//GET - /api/cantrips - get all spells
router.get("/", async (req, res, next) => {
     try {
          console.log("line 9 from api/cantrips");
          const cantrips = await getAllCantrips();
          res.send(cantrips);
     } catch (error) {
          next(error);
     }
});

// GET - /api/cantrips/:id - get spell by id
router.get("/:id", async (req, res, next) => {
     try {
          const spell = await getCantripById(req.params.id);
          res.send(cantrip);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
