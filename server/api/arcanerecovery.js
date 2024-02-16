const express = require("express");
const router = express.Router();

const {
     getAllArcaneRecoveries,
     getArcaneRecoveryById,
} = require("../db/helpers/arcanerecovery");

//GET - /api/arcanerecoveries - get all Arcane Recovery statuses
router.get("/", async (req, res, next) => {
     try {
          const arcaneRecoveries = await getAllArcaneRecoveries();
          res.send(arcaneRecoveries);
     } catch (error) {
          next(error);
     }
});

// // GET - /api/arcanerecovery/:id - get spell by id
// router.get("/arcanerecoveries/:id", async (req, res, next) => {
//      try {
//           const spell = await getArcaneRecoveryById(req.params.id);
//           res.send(arcanerecovery);
//      } catch (error) {
//           next(error);
//      }
// });

module.exports = router;
