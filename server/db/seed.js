//this will reset the database - yes for student project, no for life

//pulling in connection to local db
const client = require("./client");
//pull in dummy data arrays from the seed data
const {
     characters,
     arcaneRecovery,
     spellbooks,
     spells,
     cantrips,
} = require("./seedData");

//pull in helpers
const { createCharacter, getAllCharacters } = require("./helpers/characters");
const { createSpellbooks } = require("./helpers/spellbooks");
const { createSpells } = require("./helpers/spells");
const { createArcaneRecovery } = require("./helpers/arcaneRecovery");
const { createCantrips } = require("./helpers/cantrips");

//Drop tables for cleanliness
const dropTables = async () => {
     try {
          //client.query: calling client connection to make a query to the db; write sequel here
          console.log("starting to drop tables");
          await client.query(`
        DROP TABLE IF EXISTS arcaneRecovery;
        DROP TABLE IF EXISTS characters;
        DROP TABLE IF EXISTS spellbooks;
        DROP TABLE IF EXISTS spells;
        DROP TABLE IF EXISTS cantrips;
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

    CREATE TABLE spellbooks (
        spellbook_id SERIAL PRIMARY KEY,
        spells_avail INTEGER,
        cantrips_avail INTEGER,
        spells_known text[],
        cantrips_known text[]
    );

    CREATE TABLE characters (
        character_id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        heritage varchar(255),
        spellbook_id INTEGER REFERENCES spellbooks(spellbook_id)


    );

    CREATE TABLE arcaneRecovery (
        usedToday BOOLEAN NOT NULL,
        character_id INTEGER REFERENCES characters(character_id)
    );

    CREATE TABLE spells (
        spell_id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
      
    );

    CREATE TABLE cantrips (
        cantrip_id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
      
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
          //loop through the 'characters' array from teh seed data
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

const createInitialSpellbooks = async () => {
     try {
          console.log("creating initial spellbooks...");
          // console.log(spellbooks);
          for (const spellbook of spellbooks) {
               await createSpellbooks(spellbook);
          }
          console.log("spellbooks created!");
     } catch (error) {
          throw error;
     }
};

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
          for (const boolean of arcaneRecovery) {
               await createArcaneRecovery(boolean);
          }
          console.log("initial states created!");
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
          await createInitialSpellbooks();
          await createInitialCharacters();
          await createInitialArcaneRecovery();

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
