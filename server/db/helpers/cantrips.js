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
     } catch (error) {
          throw error;
     }
};

module.exports = { createCantrips };
