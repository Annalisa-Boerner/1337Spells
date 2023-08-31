const client = require("../client");

const createArcaneRecovery = async ({ character_id, usedToday }) => {
     try {
          const {
               rows: [boolean],
          } = await client.query(
               `
            INSERT INTO arcaneRecovery(character_id, usedToday)
            VALUES ($1, $2)
            RETURNING *;
            `,
               [character_id, usedToday]
          );
     } catch (error) {
          throw error;
     }
};

module.exports = { createArcaneRecovery };
