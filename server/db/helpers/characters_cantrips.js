const client = require("../client");

const createCharacters_Cantrips = async ({
    cantrip_id,
    character_id,
    cantrip_name,
}) => {
    try {
        const {
            rows: [Characters_cantrips],
        } = await client.query(
            `
    INSERT INTO characters_cantrips(cantrip_id, character_id, cantrip_name)       
        VALUES($1, $2, $3)
        RETURNING *;
       `,
            [cantrip_id, character_id, cantrip_name]
        );
    } catch (error) {
        throw error;
    }
};

const getAllCharacters_Cantrips = async () => {
    try {
        console.log("helpers line 22");
        const { rows } = await client.query(`
          SELECT * FROM characters_cantrips;
          `);
        return rows;
    } catch (error) {
        throw error;
    }
};

const getCharacters_CantripsById = async (characters_cantrips_id) => {
    try {
        const {
            rows: [characters_cantrips],
        } = await client.query(`
     SELECT *
     FROM characters_cantrips
     WHERE characters_cantrips_id=${characters_cantrips_id};
     `);
        return characters_cantrips;
    } catch (error) {
        throw error;
    }
};

const deleteCharacters_Cantrips = async (characters_cantrips_id) => {
    try {
        const { rows } = await client.query(`
               DELETE FROM characters_cantrips
               WHERE characters_cantrips_id=${characters_cantrips_id}
               RETURNING *;
          `);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createCharacters_Cantrips,
    getAllCharacters_Cantrips,
    getCharacters_CantripsById,
    deleteCharacters_Cantrips,
};
