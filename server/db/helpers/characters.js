//I'm making a query, so I'm connecting to db with client

const client = require('../client')
//make sure destructured keys in next line are in the same order as the table so that they match up after the queries
const createCharacter = async ({username, password, name, heritage, spellbook_id}) => {
    try {
        //INSERT sql query
        const {
            rows: [character],
        } = await client.query(`
            INSERT INTO characters(username, password, name, heritage)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `,
        [username, password, name, heritage])
return character;


    } catch (error) {
        throw error
    }
}

//second function: a get all as a good starting point

const getAllCharacters = async () => {
try {
    const {rows} = await client.query(`
    SELECT * 
    FROM characters;
    `)
    console.log('got all characters!')
    return rows
} catch (error) {
    throw error
}

}
module.exports = {createCharacter, getAllCharacters}