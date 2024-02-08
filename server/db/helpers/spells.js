const { pool } = require("../client");

const createSpells = async ({ spell_index, spell_name }) => {
    try {
        const {
            rows: [spell],
        } = await pool.query(
            `INSERT INTO spells(spell_index, spell_name)
       VALUES ($1, $2)
       RETURNING *;`,
            [spell_index, spell_name]
        );
        return spell;
    } catch (error) {
        throw error;
    }
};

const getAllSpells = async () => {
    try {
        const { rows } = await pool.query(`
     SELECT *
     FROM spells;
     `);
        return rows;
    } catch (error) {
        throw error;
    }
};

const getSpellById = async (spell_index) => {
    try {
        const {
            rows: [spell],
        } = await pool.query(`
          SELECT *
          FROM spells
          WHERE spell_index=${spell_index};`);
        return spell;
    } catch (error) {
        throw error;
    }
};

const deleteSpells = async (spell_index) => {
    try {
        console.log("backend db helper deleteSpells");
        const { rows } = await pool.query(`
          DELETE
          FROM spells
          WHERE spell_index=${spell_index}
          RETURNING *;
          `);
    } catch (error) {
        throw error;
    }
};

const putSpells = async (spell_index, body) => {
    console.log("line 59 " + spell_index + " " + body);
    try {
        const { rows } = await pool.query(
            `
                    UPDATE spells
                    SET name = '${body.name}'
                    WHERE spell_id = ${spell_index}
                    RETURNING *;
     `
        );

        return rows;
    } catch (error) {
        throw error;
    }
};
module.exports = {
    createSpells,
    getAllSpells,
    getSpellById,
    deleteSpells,
    putSpells,
};
