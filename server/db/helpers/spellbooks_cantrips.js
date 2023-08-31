const client = require("../client");

const createSpellbooks_cantrips = async ({ spellbook_id, cantrip_id }) => {
     try {
          const {
               rows: [Spellbooks_cantrips],
          } = await client.query(
               `
    INSERT INTO spellbooks_cantrips(spellbook_id, cantrip_id)       
        VALUES($1, $2)
        RETURNING *;
       `,
               [spellbook_id, cantrip_id]
          );
     } catch (error) {
          throw error;
     }
};

module.exports = { createSpellbooks_cantrips };
