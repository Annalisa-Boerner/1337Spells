//this will reset the database - yes for student project, no for life

//pulling in connection to local db
const client = require("./client");
//pull in dummy data arrays from the seed data
const {
    characters,
    arcanerecovery,
    spellbooks,
    spells,
    cantrips,
    characters_spells,
    characters_cantrips,
} = require("./seedData");

//pull in helpers
const {
    createCharacter,
    getCharacterByUsername,
} = require("./helpers/characters");
// const {
//      createSpellbooks,
//      getAllSpellbooks,
//      getSpellbookById,
// } = require("./helpers/spellbooks");
const {
    createSpells,
    getAllSpells,
    getSpellById,
} = require("./helpers/spells");
const {
    createArcaneRecovery,
    getAllArcaneRecoveries,
    getArcaneRecoveryById,
} = require("./helpers/arcanerecovery");
const {
    createCantrips,
    getAllCantrips,
    getCantripById,
} = require("./helpers/cantrips");
const { createCharacter_Spell } = require("./helpers/characters_spells");
const { createCharacter_Cantrip } = require("./helpers/characters_cantrips");

//Drop tables for cleanliness
const dropTables = async () => {
    try {
        //client.query: calling client connection to make a query to the db; write sequel here
        console.log("starting to drop tables");
        await client.query(`
        DROP TABLE IF EXISTS arcanerecovery CASCADE;
        DROP TABLE IF EXISTS characters CASCADE;
        DROP TABLE IF EXISTS spellbooks CASCADE;
        DROP TABLE IF EXISTS spells CASCADE;
        DROP TABLE IF EXISTS cantrips CASCADE;
        DROP TABLE IF EXISTS characters_spells CASCADE;
        DROP TABLE IF EXISTS characters_cantrips CASCADE;
        `);
        console.log("tables dropped!");
    } catch (error) {
        throw error;
    }
};

//Create tables - this is the official column order
const createTables = async () => {
    console.log("creating tables...");
    await client.query(`

    CREATE TABLE characters (
     character_id SERIAL PRIMARY KEY,
     username varchar(255) UNIQUE NOT NULL,
     password varchar(255) NOT NULL,
     name varchar(255),
     heritage varchar(255),
     image varchar(255)


 );
    
    CREATE TABLE spells (
        spell_id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
      
    );

    CREATE TABLE cantrips (
        cantrip_id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
      
    );
    CREATE TABLE spellbooks (
        spellbook_id SERIAL PRIMARY KEY
    );

    CREATE TABLE characters_spells (
        characters_spells_id SERIAL PRIMARY KEY,
        spell_id INTEGER REFERENCES spells(spell_id),
        character_id INTEGER REFERENCES characters(character_id),
        spell_name varchar(255)
    );

    CREATE TABLE characters_cantrips (
        characters_cantrips_id SERIAL PRIMARY KEY,
        cantrip_id INTEGER REFERENCES cantrips(cantrip_id),
        character_id INTEGER REFERENCES characters(character_id),
        cantrip_name varchar(255) 
    );
    




    CREATE TABLE arcanerecovery (
        usedToday BOOLEAN NOT NULL,
        character_id INTEGER REFERENCES characters(character_id)
    );

    `);
    //fks are integers:
    //fk_id INTEGER REFERENCES tablename(columnName aka fk_id)
    console.log("tables created!");
};
//insert mock data from seedData

//---------create characters-----------
const createInitialCharacters = async () => {
    try {
        console.log("creating initial characters...");
        //loop through the 'characters' array from the seed data
        for (const character of characters) {
            //insert each character into the table using a sql query
            await createCharacter(character);
        }
        console.log("characters created!");
    } catch (error) {
        //throwing halts execution of the file
        throw error;
    }
};

// const createInitialSpellbooks = async () => {
//      try {
//           console.log("creating initial spellbooks...");
//           // console.log(spellbooks);
//           for (const spellbook of spellbooks) {
//                await createSpellbooks(spellbook);
//           }
//           console.log("spellbooks created!");
//      } catch (error) {
//           throw error;
//      }
// };

const createInitialSpells = async () => {
    try {
        console.log("creating initial spells...");
        for (const spell of spells) {
            await createSpells(spell);
        }
        console.log("spells created!");
    } catch (error) {
        throw error;
    }
};

const createInitialCantrips = async () => {
    try {
        console.log("creating initial cantrips...");
        for (const cantrip of cantrips) {
            await createCantrips(cantrip);
        }
        console.log("cantrips created!");
    } catch (error) {
        throw error;
    }
};

const createInitialArcaneRecovery = async () => {
    try {
        console.log("creating initial arcane recovery states...");
        for (const status of arcanerecovery) {
            await createArcaneRecovery(status);
        }
        console.log("initial states created!");
    } catch (error) {
        throw error;
    }
};

const createInitialCharacters_spells = async () => {
    try {
        console.log("creating characters / spells junction...");
        for (character_spell of characters_spells) {
            await createCharacter_Spell(character_spell);
        }
        console.log(character_spell);
        console.log("spellbook/spells junction created");
    } catch (error) {
        throw error;
    }
};

const createInitialCharacters_cantrips = async () => {
    try {
        console.log("creating characters / cantrips junction...");
        for (character_cantrip of characters_cantrips) {
            await createCharacter_Cantrip(character_cantrip);
        }
        console.log(character_cantrip);
        console.log("character/cantrips junction created");
    } catch (error) {
        throw error;
    }
};
//------------call all functions and build db-------------

const rebuildDb = async () => {
    try {
        //ACTUALLY connect - client.query sets up a query; the connect actually sends it; client.js is where we established client
        client.connect();
        //run functions

        await dropTables();

        await createTables();
        //generating start data
        await createInitialSpells();
        await createInitialCantrips();
        //    await createInitialSpellbooks();
        await createInitialCharacters();
        await createInitialArcaneRecovery();
        await createInitialCharacters_spells();
        await createInitialCharacters_cantrips();

        //    await getAllCharacters()
    } catch (error) {
        console.error(error);
    } finally {
        console.log("closing connection...");
        //close connection
        client.end();
        console.log("connection is closed!");
    }
};

rebuildDb();
