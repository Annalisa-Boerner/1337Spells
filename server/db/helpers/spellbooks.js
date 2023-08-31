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
     } catch (error) {
          throw error;
     }
};

module.exports = { createSpellbooks };
