const client = require("../client");

const createSpellbooks_spells = async ({ spellbook_id, spell_id }) => {
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

module.exports = { createSpellbooks_spells };
