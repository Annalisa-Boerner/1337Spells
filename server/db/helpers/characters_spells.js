const client = require("../client");

const createCharacter_Spell = async ({
    spell_index,
    character_id,
    spell_name,
}) => {
    try {
        const {
            rows: [character_spell],
        } = await client.query(
            `
    INSERT INTO characters_spells(spell_index, character_id, spell_name)       
        VALUES($1, $2, $3)
        RETURNING *;
       `,
            [spell_index, character_id, spell_name]
        );
        return character_spell;
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

const deleteCharacter_Spell = async (spell_id) => {
    try {
        console.log('deleting character spell by spell id"');
        const { rows } = await client.query(`
               DELETE FROM characters_spells
               WHERE spell_id=${spell_id}
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
    deleteCharacter_Spell,
};
