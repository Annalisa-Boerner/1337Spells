const client = require("../client");

const createCharacter_Cantrip = async ({ cantrip_id, character_id }) => {
    try {
        const {
            rows: [Character_cantrip],
        } = await client.query(
            `
    INSERT INTO characters_cantrips(cantrip_id, character_id)       
        VALUES($1, $2)
        RETURNING *;
       `,
            [cantrip_id, character_id]
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

const getCharacters_CantripsByCharacterId = async (character_id) => {
    try {
        console.log("entering character's cantrips by character id");
        const { rows } = await client.query(`
     SELECT *
     FROM characters_cantrips
     WHERE character_id=${character_id};
     `);
        return rows;
    } catch (error) {
        throw error;
    }
};

const deleteCharacters_Cantrip = async (characters_cantrips_id) => {
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
    createCharacter_Cantrip,
    getAllCharacters_Cantrips,
    getCharacters_CantripsByCharacterId,
    deleteCharacters_Cantrip,
};
