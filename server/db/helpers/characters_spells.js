const client = require("../client");

const createCharacter_Spell = async ({ spell_id, character_id }) => {
    try {
        const {
            rows: [Character_spell],
        } = await client.query(
            `
    INSERT INTO characters_spells(spell_id, character_id)       
        VALUES($1, $2)
        RETURNING *;
       `,
            [spell_id, character_id]
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

const getCharacters_SpellsByCharacterId = async (character_id) => {
    try {
        console.log("entering character's spells by character id");
        const { rows } = await client.query(`
     SELECT *
     FROM characters_spells
     WHERE character_id=${character_id};
     `);
        console.log("character's spells in get by character_id", rows);
        return rows;
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
        console.log("Delete successful");
    } catch (error) {
        throw error;
    }
};
module.exports = {
    createCharacter_Spell,
    getAllCharacters_Spells,
    getCharacters_SpellsByCharacterId,
    deleteCharacters_Spells,
};
