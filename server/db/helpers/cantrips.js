const client = require("../client");

const createCantrips = async ({ cantrip_id, name }) => {
     try {
          const {
               rows: [cantrip],
          } = await client.query(
               `INSERT INTO cantrips(cantrip_id, name)
       VALUES ($1, $2)
       RETURNING *;`,
               [cantrip_id, name]
          );
          return cantrip;
     } catch (error) {
          throw error;
     }
};
const getAllCantrips = async () => {
     try {
          console.log("line 20 from getAllCantrips");
          const { rows } = await client.query(`
     SELECT *
     FROM cantrips;
     `);
          return rows;
     } catch (error) {
          throw error;
     }
};

const getCantripById = async (cantrip_id) => {
     try {
          const {
               rows: [cantrip],
          } = await client.query(`
          SELECT *
          FROM cantrips
          WHERE cantrip_id=${cantrip_id};`);
          return cantrip;
     } catch (error) {}
};
module.exports = { createCantrips, getAllCantrips, getCantripById };
