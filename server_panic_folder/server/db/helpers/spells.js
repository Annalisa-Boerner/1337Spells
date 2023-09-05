const client = require("../client");

const createSpells = async ({ name }) => {
     try {
          const {
               rows: [spell],
          } = await client.query(
               `INSERT INTO spells(name)
       VALUES ($1)
       RETURNING *;`,
               [name]
          );
          return spell;
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
     } catch (error) {
          throw error;
     }
};

const deleteSpells = async (spell_id) => {
     try {
          const { rows } = await client.query(`
          DELETE
          FROM spells
          WHERE spell_id=${spell_id}
          RETURNING *;
          `);
     } catch (error) {
          throw error;
     }
};

const putSpells = async (spell_id, body) => {
     console.log("line 59 " + spell_id + " " + body);
     try {
          const { rows } = await client.query(
               `
                    UPDATE spells
                    SET name = '${body.name}'
                    WHERE spell_id = ${spell_id}
                    RETURNING *;
     `
          );

          return rows;
     } catch (error) {
          throw error;
     }
};
module.exports = {
     createSpells,
     getAllSpells,
     getSpellById,
     deleteSpells,
     putSpells,
};
