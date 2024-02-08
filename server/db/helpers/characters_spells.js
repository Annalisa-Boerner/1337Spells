const { pool } = require("../client");

const createCharacterSpell = async ({
    spell_index,
    character_id,
    spell_name,
}) => {
    try {
        const {
            rows: [character_spell],
        } = await pool.query(
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

const getAllCharactersSpells = async () => {
    try {
        const { rows } = await pool.query(`
          SELECT * FROM characters_spells;
          `);
        return rows;
    } catch (error) {
        throw error;
    }
};

const getCharactersSpellsByCharacterId = async (character_id) => {
    try {
        console.log("entering character's spells by character id");
        const { rows } = await pool.query(`
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

const getCharactersSpellsByCharactersSpellsId = async (
    characters_spells_id
) => {
    try {
        console.log("entering character's spells by characters_spells id");
        const { rows } = await pool.query(`
     SELECT *
     FROM characters_spells
     WHERE characters_spells_id=${characters_spells_id};
     `);
        console.log("character's spells in get by characters_spells_id", rows);
        return rows;
    } catch (error) {
        throw error;
    }
};

const deleteCharacterSpell = async (characters_spells_id) => {
    try {
        console.log('db helpers deleteCharacter_Spell"');
        const { rows } = await pool.query(`
               DELETE FROM characters_spells
               WHERE characters_spells_id = ${characters_spells_id}
               RETURNING *;
          `);
        console.log("Delete successful");
    } catch (error) {
        throw error;
    }
};
module.exports = {
    createCharacterSpell,
    getAllCharactersSpells,
    getCharactersSpellsByCharacterId,
    deleteCharacterSpell,
    getCharactersSpellsByCharactersSpellsId,
};
