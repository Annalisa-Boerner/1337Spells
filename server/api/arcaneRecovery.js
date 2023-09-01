const express = require("express");
const router = express.Router();

const {
     getAllArcaneRecoveries,
     getArcaneRecoveryById,
} = require("../db/helpers/arcaneRecovery");

//GET - /api/arcanerecovery - get all Arcane Recovery statuses
router.get("/arcanerecoveries", async (req, res, next) => {
     try {
          const spells = await getAllArcaneRecoveries();
          res.send(arcaneRecoveries);
     } catch (error) {
          next(error);
     }
});

// GET - /api/arcanerecovery/:id - get spell by id
router.get("/arcanerecoveries/:id", async (req, res, next) => {
     try {
          const spell = await getArcaneRecoveryById(req.params.id);
          res.send(arcaneRecovery);
     } catch (error) {
          next(error);
     }
});

module.exports = router;
