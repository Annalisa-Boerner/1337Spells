const client = require("../client");

const createSpellbooks = async ({
     spellbook_id,
     spells_avail,
     cantrips_avail,
}) => {
     try {
          const {
               rows: [spellbook],
          } = await client.query(
               `
    INSERT INTO spellbooks(spellbook_id, spells_avail, cantrips_avail)       
        VALUES($1, $2, $3)
        RETURNING *;
       `,
               [spellbook_id, spells_avail, cantrips_avail]
          );
     } catch (error) {
          throw error;
     }
};

module.exports = { createSpellbooks };
