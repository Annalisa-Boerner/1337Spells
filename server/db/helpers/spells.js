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

const getAllSpells = async () => {
     try {
          const { rows } = await client.query(`
     SELECT *
     FROM spells;
     `);
          return rows;
     } catch (error) {
          throw error;
     }
};

const getSpellById = async (spell_id) => {
     try {
          const {
               rows: [spell],
          } = await client.query(`
          SELECT *
          FROM spells
          WHERE spell_id=${spell_id};`);
          return spell;
     } catch (error) {}
};

module.exports = { createSpells, getAllSpells, getSpellById };
