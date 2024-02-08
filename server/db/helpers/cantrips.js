const { pool } = require("../client");

const createCantrips = async ({ cantrip_index, cantrip_name }) => {
    try {
        const {
            rows: [cantrip],
        } = await pool.query(
            `INSERT INTO cantrips(cantrip_index, cantrip_name)
       VALUES ($1, $2)
       RETURNING *;`,
            [cantrip_index, cantrip_name]
        );
        return cantrip;
    } catch (error) {
        throw error;
    }
};
const getAllCantrips = async () => {
    try {
        console.log("line 20 from getAllCantrips");
        const { rows } = await pool.query(`
     SELECT *
     FROM cantrips;
     `);
        return rows;
    } catch (error) {
        throw error;
    }
};

const getCantripById = async (cantrip_index) => {
    try {
        const {
            rows: [cantrip],
        } = await pool.query(`
          SELECT *
          FROM cantrips
          WHERE cantrip_index=${cantrip_index};`);
        return cantrip;
    } catch (error) { }
};
module.exports = { createCantrips, getAllCantrips, getCantripById };
