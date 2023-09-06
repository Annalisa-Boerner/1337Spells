//make some arrays of objects based on the schema design
//itty bitty sample size

//arcane recovery toggles
const arcanerecovery = [
     { usedToday: false, character_id: 1 },
     { usedToday: true, character_id: 2 },
     { usedToday: false, character_id: 3 },
];

//characters
const characters = [
     {
          username: "Seven",
          password: "asdffdsa",
          name: "Seven",
          heritage: "High Elf",
          image: "https://64.media.tumblr.com/b216162dff1c7cbde56f09071ba1600b/tumblr_o7nmx7qQEk1uwv4ido1_1280.jpg",
          spellbook_id: 1,
     },
     {
          username: "Sadie",
          password: "killkillkill",
          name: "Sadie Killmore",
          heritage: "High Elf",
          image: "https://media.npr.org/assets/music/news/2010/01/kesha_sq-0a08360007f656e710c1ff466868f7371266943e.jpg?s=100&c=85&f=webp",
          spellbook_id: 2,
     },
     {
          username: "EyyBee",
          password: "onesinglebee",
          name: "All the NPCs",
          heritage: "human",
          image: "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90h8kit4209809tqy8mjr20dc/public",
          spellbook_id: 3,
     },
];

//spellbooks
const spellbooks = [
     {
          spellbook_id: 1,
     },
     {
          spellbook_id: 2,
     },
     {
          spellbook_id: 3,
     },
];

//spells that exist
const spells = [
     { spell_id: 1, name: "Magic Missile" },
     { spell_id: 2, name: "Sleep" },
     { spell_id: 3, name: "Feather Fall" },
];

//cantrips that exist
const cantrips = [
     { cantrip_id: 1, name: "Mage Hand" },
     { cantrip_id: 2, name: "Friends" },
     { cantrip_id: 3, name: "Gust" },
];

//junction between spellbook and spells
const spellbooks_spells = [
     { spellbook_id: 1, spell_id: 1 },
     { spellbook_id: 1, spell_id: 2 },
     { spellbook_id: 1, spell_id: 3 },
];

//junction between spellbook and cantrips

const spellbooks_cantrips = [
     { spellbook_id: 3, cantrip_id: 1 },
     { spellbook_id: 3, cantrip_id: 2 },
     { spellbook_id: 3, cantrip_id: 1 },
];
module.exports = {
     arcanerecovery,
     characters,
     spellbooks,
     spells,
     cantrips,
     spellbooks_spells,
     spellbooks_cantrips,
};
