const client = require("../client");

const createSpells = async ({ spell_id, name }) => {
     try {
          const {
               rows: [spell],
          } = await client.query(
               `INSERT INTO spells(spell_id, name)
       VALUES ($1, $2)
       RETURNING *;`,
               [spell_id, name]
          );
     } catch (error) {
          throw error;
     }
};

module.exports = { createSpells };
