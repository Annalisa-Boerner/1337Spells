//we are making a postgres route

const { Client } = require("pg");

//name database by setting string to variable

const spells = "1337spells";

//new instance of Client with specific characterization (establish connection to db)
const client = new Client({
    host: "app-8013a9f3-5dbf-41e2-a704-f4f6c7c55eb5-do-user-15565143-0.c.db.ondigitalocean.com",
    port: 25060,
    username: db,
    password: AVNS_MQ86iaFh7WotWEFg4OR,
    database: db,
    sslmode: require,
});

module.exports = client;
