const client = require("../client");

const createSpellbooks = async ({ spellbook_id }) => {
     try {
          const {
               rows: [spellbook],
          } = await client.query(
               `
    INSERT INTO spellbooks(spellbook_id)      
        VALUES($1)
        RETURNING *;
       `,
               [spellbook_id]
          );
          return spellbook;
     } catch (error) {
          throw error;
     }
};

const getAllSpellbooks = async () => {
     try {
          const { rows } = await client.query(`
          SELECT *
          FROM spellbooks`);
          return rows;
     } catch (error) {
          throw error;
     }
};

const getSpellbookById = async (spellbook_id) => {
     try {
          const {
               rows: [spellbook],
          } = await client.query(`
          SELECT *
          FROM spellbooks
          WHERE spellbook_id=${spellbook_id};
          `);
          return spellbook;
     } catch (error) {
          throw error;
     }
};
module.exports = { createSpellbooks, getAllSpellbooks, getSpellbookById };
