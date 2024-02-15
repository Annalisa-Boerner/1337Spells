//we are making a postgres route

const { Client } = require("pg");
// const db = process.env.DATABASE_URL;
const password = process.env.PASSWORD;

//name database by setting string to variable

// const spells = "1337spells";

//new instance of Client with specific characterization (establish connection to db)
const client = new Client({
    user: "db",
    host: "app-8013a9f3-5dbf-41e2-a704-f4f6c7c55eb5-do-user-15565143-0.c.db.ondigitalocean.com",
    database: "db",
    password: password,
    port: 25060,
    ssl: {
        rejectUnauthorized: false, // Required because DigitalOcean SSL is self-signed
    },
});

module.exports = client;

