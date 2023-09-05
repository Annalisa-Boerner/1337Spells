const client = require("../client");

const createSpellbooks_cantrips = async ({ cantrip_id, spellbook_id }) => {
     try {
          const {
               rows: [Spellbooks_cantrips],
          } = await client.query(
               `
    INSERT INTO spellbooks_cantrips(cantrip_id, spellbook_id)       
        VALUES($1, $2)
        RETURNING *;
       `,
               [cantrip_id, spellbook_id]
          );
     } catch (error) {
          throw error;
     }
};

const getAllSpellbooks_Cantrips = async () => {
     try {
          console.log("helpers line 22");
          const { rows } = await client.query(`
          SELECT * FROM spellbooks_cantrips;
          `);
          return rows;
     } catch (error) {
          throw error;
     }
};

const getSpellbooks_CantripsById = async (spellbooks_cantrips_id) => {
     try {
          const {
               rows: [spellbook_cantrips],
          } = await client.query(`
     SELECT *
     FROM spellbooks_cantrips
     WHERE spellbooks_cantrips_id=${spellbooks_cantrips_id};
     `);
          return spellbook_cantrips;
     } catch (error) {
          throw error;
     }
};

module.exports = {
     createSpellbooks_cantrips,
     getAllSpellbooks_Cantrips,
     getSpellbooks_CantripsById,
};
