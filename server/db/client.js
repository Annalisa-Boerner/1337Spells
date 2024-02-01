//we are making a postgres route

const { Client } = require("pg");
const db = process.env.DATABASE_URL;
//name database by setting string to variable

const spells = "1337spells";

//new instance of Client with specific characterization (establish connection to db)
const client = new Client({ db });

module.exports = client;
