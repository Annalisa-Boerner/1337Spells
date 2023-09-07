const client = require("../client");

const createSpellbooks_Cantrips = async ({
     cantrip_id,
     spellbook_id,
     cantrip_name,
}) => {
     try {
          const {
               rows: [Spellbooks_cantrips],
          } = await client.query(
               `
    INSERT INTO spellbooks_cantrips(cantrip_id, spellbook_id, cantrip_name)       
        VALUES($1, $2, $3)
        RETURNING *;
       `,
               [cantrip_id, spellbook_id, cantrip_name]
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

const deleteSpellbooks_Cantrips = async (spellbooks_cantrips_id) => {
     try {
          const { rows } = await client.query(`
               DELETE FROM spellbooks_cantrips
               WHERE spellbooks_cantrips_id=${spellbooks_cantrips_id}
               RETURNING *;
          `);
     } catch (error) {
          throw error;
     }
};

module.exports = {
     createSpellbooks_Cantrips,
     getAllSpellbooks_Cantrips,
     getSpellbooks_CantripsById,
     deleteSpellbooks_Cantrips,
};
