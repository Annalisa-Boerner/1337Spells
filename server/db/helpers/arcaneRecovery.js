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

const getAllArcaneRecoveries = async () => {
     try {
          const { rows } = client.query(`
          
          SELECT *
          FROM "arcaneRecovery";
          `);
          return rows;
     } catch (error) {
          throw error;
     }
};

const getArcaneRecoveryById = async (character_id) => {
     try {
          const {
               rows: [arcaneRecovery],
          } = await client.query(`
          SELECT * FROM arcaneRecovery WHERE character_id=${character_id};
          `);
          return arcaneRecovery;
     } catch (error) {
          throw error;
     }
};
module.exports = {
     createArcaneRecovery,
     getAllArcaneRecoveries,
     getArcaneRecoveryById,
};
