const client = require("../client");

const createCharacterCantrip = async ({
    cantrip_index,
    character_id,
    cantrip_name,
}) => {
    try {
        const {
            rows: [character_cantrip],
        } = await client.query(
            `
    INSERT INTO characters_cantrips(cantrip_index, character_id, cantrip_name)       
        VALUES($1, $2, $3)
        RETURNING *;
       `,
            [cantrip_index, character_id, cantrip_name]
        );
        console.log("character_cantrip output", character_cantrip);
        return character_cantrip;
    } catch (error) {
        throw error;
    }
};

const getAllCharactersCantrips = async () => {
    try {
        const { rows } = await client.query(`
          SELECT * FROM characters_cantrips;
          `);
        return rows;
    } catch (error) {
        throw error;
    }
};

const getCharactersCantripsByCharacterId = async (character_id) => {
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

const getCharactersCantripsByCharactersCantripsId = async (
    characters_cantrips_id
) => {
    try {
        console.log("entering character's cantrips by characters_cantrips id");
        const { rows } = await client.query(`
     SELECT *
     FROM characters_cantrips
     WHERE characters_cantrips_id=${characters_cantrips_id};
     `);
        console.log(
            "character's cantrips in get by characters_cantrips_id",
            rows
        );
        return rows;
    } catch (error) {
        throw error;
    }
};

const deleteCharacterCantrip = async (characters_cantrips_id) => {
    try {
        const { rows } = await client.query(`
               DELETE FROM characters_cantrips
               WHERE characters_cantrips_id=${characters_cantrips_id}
               RETURNING *;
          `);
        console.log("delete successful");
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createCharacterCantrip,
    getAllCharactersCantrips,
    getCharactersCantripsByCharacterId,
    getCharactersCantripsByCharactersCantripsId,
    deleteCharacterCantrip,
};
