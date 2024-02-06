//we are making a postgres route

const { Client } = require("pg");
// const db = process.env.DATABASE_URL;
const db = urlGoesHere;
//name database by setting string to variable

const spells = "1337spells";

//new instance of Client with specific characterization (establish connection to db)
const client = new Client({ connectionString: db });

client
    .connect()
    .then(() => console.log("connected to remote database"))
    .catch((err) => console.error("Error connecting to database", err));

module.exports = client;
