const client = require("../client");

const createSpells = async ({ spell_id, name, level }) => {
     try {
          const {
               rows: [spell],
          } = await client.query(
               `INSERT INTO spells(spell_id, name, level)
       VALUES ($1, $2, $3)
       RETURNING *;`,
               [spell_id, name, level]
          );
     } catch (error) {
          throw error;
     }
};

module.exports = { createSpells };
