//this will reset the database - yes for student project, no for life

//pulling in connection to local db
const client = require("./client")

//Drop tables for cleanliness
const dropTables = async () => {
    try {
        //client.query: calling client connection to make a query to the db; write sequel here
        await client.query(`
        DROP TABLE arcaneRecovery;
        DROP TABLE characters;
        DROP TABLE spellbooks;
        DROP TABLE spells;
        `)
    } catch (error) {
        throw error
    }
}

//Create tables - this is the official column order
const createTables = async () => {
    await client.query(`
    CREATE TABLE arcaneRecovery (
        usedToday BOOLEAN NOT NULL
    );


    CREATE TABLE characters (
        character_id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        heritage varchar(255),
        spellbook_id INTEGER REFERENCES spellbooks(spellbook_id)

    );
    CREATE TABLE spellbooks (
        spellbook_id SERIAL PRIMARY KEY,
        level1_avail INTEGER,
        cantrip_avail INTEGER,
        spells_known INTEGER,
        cantrips_known INTEGER,
    );
    
    CREATE TABLE spells (
        
    )
    `)
    //fks are integers:
    //fk_id INTEGER REFERENCES tablename(columnName aka fk_id)
}
//insert mock data from seedData

//call all functions and build db

const rebuildDb = async () => {

try {
    //ACTUALLY connect - client.query sets up a query; the connect actually sends it; client.js is where we established client
    client.connect()
    //run functions
    await dropTables()

    await createTables()
} catch (error) {
    console.error(error)
} finally {
    //close connection
    client.end()
}




}

rebuildDb();