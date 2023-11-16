//I'm making a query, so I'm connecting to db with client

const client = require("../client");

//make sure destructured keys in next line are in the same order as the table so that they match up after the queries
const createCharacter = async ({
    username,
    password,
    name,
    heritage,
    image,
    spellbook_id,
}) => {
    try {
        //INSERT sql query
        const {
            rows: [character],
        } = await client.query(
            `
            INSERT INTO characters(username, password, name, heritage, image, spellbook_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `,
            [username, password, name, heritage, image, spellbook_id]
        );
        return character;
    } catch (error) {
        throw error;
    }
};

const getAllCharacters = async () => {
    try {
        const { rows } = await client.query(`
          SELECT * FROM characters;
          `);
        return rows;
    } catch (error) {
        throw error;
    }
};
const getCharacterById = async (character_id) => {
    try {
        console.log("entering getCharacterById");
        console.log(" character id in helpers", character_id);

        const {
            rows: [character],
        } = await client.query(
            `
          SELECT *
          FROM characters
WHERE character_id=${character_id};`
        );

        console.log("character in db helpers", character);
        return character;
    } catch (error) {
        throw error;
    }
};

const getCharacterByUsername = async (username) => {
    try {
        console.log("entering getCharacterByUsername");
        console.log(" username in helpers", username);

        const {
            rows: [character],
        } = await client.query(
            `
          SELECT *
          FROM characters
WHERE username= '${username}';`
        );

        console.log("username in db helpers", username);
        return character;
    } catch (error) {
        throw error;
    }
};
module.exports = {
    createCharacter,
    getAllCharacters,
    getCharacterById,
    getCharacterByUsername,
};
