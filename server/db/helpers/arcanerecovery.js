const { client } = require("../client");

const createArcaneRecovery = async ({ usedToday, character_id }) => {
     try {
          const {
               rows: [status],
          } = await client.query(
               `
            INSERT INTO arcanerecovery(usedToday, character_id)
            VALUES ($1, $2)
            RETURNING *;
            `,
               [usedToday, character_id]
          );
          return status;
     } catch (error) {
          throw error;
     }
};

const getAllArcaneRecoveries = async () => {
     try {
          const { rows } = awaitclient.query(`
          SELECT * FROM arcanerecovery;
          `);
          return rows;
     } catch (error) {
          throw error;
     }
};

const getArcaneRecoveryById = async (character_id) => {
     try {
          const {
               rows: [arcanerecovery],
          } = awaitclient.query(`
          SELECT * FROM "arcanerecovery" WHERE character_id=${character_id};
          `);
          return arcanerecovery;
     } catch (error) {
          throw error;
     }
};
module.exports = {
     createArcaneRecovery,
     getAllArcaneRecoveries,
     getArcaneRecoveryById,
};
