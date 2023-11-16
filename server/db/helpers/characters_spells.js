const client = require("../client");

const createCharacters_Spells = async ({
    spell_id,
    character_id,
    spell_name,
}) => {
    try {
        const {
            rows: [Characters_spells],
        } = await client.query(
            `
    INSERT INTO characters_spells(spell_id, character_id, spell_name)       
        VALUES($1, $2, $3)
        RETURNING *;
       `,
            [spell_id, character_id, spell_name]
        );
    } catch (error) {
        throw error;
    }
};

const getAllCharacters_Spells = async () => {
    try {
        const { rows } = await client.query(`
          SELECT * FROM characters_spells;
          `);
        return rows;
    } catch (error) {
        throw error;
    }
};

const getCharacters_SpellsById = async (characters_spells_id) => {
    try {
        const {
            rows: [character_spells],
        } = await client.query(`
     SELECT *
     FROM characters_spells
     WHERE characters_spells_id=${characters_spells_id};
     `);
        return character_spells;
    } catch (error) {
        throw error;
    }
};

const deleteCharacters_Spells = async (characters_spells_id) => {
    try {
        const { rows } = await client.query(`
               DELETE FROM characters_spells
               WHERE characters_spells_id=${characters_spells_id}
               RETURNING *;
          `);
    } catch (error) {
        throw error;
    }
};
module.exports = {
    createCharacters_Spells,
    getAllCharacters_Spells,
    getCharacters_SpellsById,
    deleteCharacters_Spells,
};
