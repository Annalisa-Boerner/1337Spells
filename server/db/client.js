// //we are making a postgres route

// const { Client } = require("pg");
// const db = process.env.DATABASE_URL;
// //name database by setting string to variable

// const spells = "1337spells";

// //new instance of Client with specific characterization (establish connection to db)
// const client = new Client({ db });

// module.exports = client;
const { Pool } = require('pg')
const password = process.env.PASSWORD;


const pool = new Pool({
    user: 'db',
    host: 'app-8013a9f3-5dbf-41e2-a704-f4f6c7c55eb5-do-user-15565143-0.c.db.ondigitalocean.com',
    database: 'db',
    password: password,
    port: 25060,
    ssl: {
        rejectUnauthorized: false // Required because DigitalOcean SSL is self-signed
    }
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to PostgreSQL database:', err.stack);
    } else {
        console.log('Connected to PostgreSQL database at:', res.rows[0].now);
    }
});

// Export the pool so it can be used by other modules
module.exports = { pool }