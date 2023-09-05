const client = require("../client");

const createSpellbooks_Spells = async ({ spellbook_id, spell_id }) => {
     try {
          const {
               rows: [Spellbooks_spells],
          } = await client.query(
               `
    INSERT INTO spellbooks_spells(spellbook_id, spell_id)       
        VALUES($1, $2)
        RETURNING *;
       `,
               [spellbook_id, spell_id]
          );
     } catch (error) {
          throw error;
     }
};

const getAllSpellbooks_Spells = async () => {
     try {
          const { rows } = await client.query(`
          SELECT * FROM spellbooks_spells;
          `);
          return rows;
     } catch (error) {
          throw error;
     }
};

const getSpellbooks_SpellsById = async (spellbooks_spells_id) => {
     try {
          const {
               rows: [spellbook_spells],
          } = await client.query(`
     SELECT *
     FROM spellbooks_spells
     WHERE spellbooks_spells_id=${spellbooks_spells_id};
     `);
          return spellbook_spells;
     } catch (error) {
          throw error;
     }
};

module.exports = {
     createSpellbooks_Spells,
     getAllSpellbooks_Spells,
     getSpellbooks_SpellsById,
};
