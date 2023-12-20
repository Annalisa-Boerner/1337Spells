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
        // spellbook_id: 1,
    },
    {
        username: "Sadie",
        password: "killkillkill",
        name: "Sadie Killmore",
        heritage: "High Elf",
        image: "https://media.npr.org/assets/music/news/2010/01/kesha_sq-0a08360007f656e710c1ff466868f7371266943e.jpg?s=100&c=85&f=webp",
        // spellbook_id: 2,
    },
    {
        username: "EyyBee",
        password: "onesinglebee",
        name: "All the NPCs",
        heritage: "human",
        image: "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90h8kit4209809tqy8mjr20dc/public",
        // spellbook_id: 3,
    },
];

//spells that exist
const spells = [
    { spell_index: "magic-missile", spell_name: "Magic Missile" },
    { spell_index: "sleep", spell_name: "Sleep" },
    { spell_index: "feather-fall", spell_name: "Feather Fall" },
];

//cantrips that exist
const cantrips = [
    { cantrip_index: "mage-hand", cantrip_name: "Mage Hand" },
    { cantrip_index: "friends", cantrip_name: "Friends" },
    { cantrip_index: "gust", cantrip_name: "Gust" },
];

//junction between characters and spells
const characters_spells = [
    {
        character_id: 1,
        spell_index: "magic-missile",
        spell_name: "Magic Missile",
    },
    { character_id: 1, spell_index: "sleep", spell_name: "Sleep" },
    {
        character_id: 1,
        spell_index: "feather-fall",
        spell_name: "Feather Fall",
    },
];

//junction between characters and cantrips

const characters_cantrips = [
    { character_id: 3, cantrip_index: "mage-hand", cantrip_name: "Mage Hand" },
    { character_id: 3, cantrip_index: "friends", cantrip_name: "Friends" },
    { character_id: 3, cantrip_index: "mage-hand", cantrip_name: "Mage Hand" },
];
module.exports = {
    arcanerecovery,
    characters,
    spells,
    cantrips,
    characters_spells,
    characters_cantrips,
};
