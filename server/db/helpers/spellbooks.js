const client = require("../client");

const createSpellbooks = async ({
     spellbook_id,
     level1_avail,
     cantrips_avail,
     spells_known,
     cantrips_known,
}) => {
     try {
          const {
               rows: [spellbook],
          } = await client.query(
               `
    INSERT INTO spellbooks(spellbook_id, level1_avail, cantrips_avail, spells_known, cantrips_known)       
        VALUES($1, $2, $3, $4, $5)
        RETURNING *;
       `,
               [
                    spellbook_id,
                    level1_avail,
                    cantrips_avail,
                    spells_known,
                    cantrips_known,
               ]
          );
     } catch (error) {
          throw error;
     }
};

module.exports = { createSpellbooks };
