//make some arrays of objects based on the schema design
//itty bitty sample size

//arcane recovery toggles
const arcaneRecovery = [
    {usedToday: false, char_id: 1},
    {usedToday: true, char_id: 2},
    {usedToday: false, char_id: 3}
]

//characters
const characters = [
    {username: 'Seven', password: 'asdffdsa', name: "Seven", heritage: "High Elf", spellbook_id: 1},
    {username: 'Sadie', password: 'killkillkill', name: "Sadie Killmore", heritage: "High Elf", spellbook_id: 2},
    {username: 'EyyBee', password: 'onesinglebee', name: "All the NPCs", heritage: "human", spellbook_id: 3},
    
]


//spellbooks
const spellbooks = [
{spellbook_id: 1, level1_avail: 6, cantrips_avail: 3,spells_known: [], cantrips_known: []},
{spellbook_id: 2, level1_avail: 4, cantrips_avail: 2,spells_known: ['Sleep', "Magic Missile"], cantrips_known: ['Mage Hand']},
{spellbook_id: 3, level1_avail: 6, cantrips_avail: 3,spells_known: [], cantrips_known: []},
]

//spells that exist
const spells = [
    {name: 'Magic Missile', level: 1},
    {name: 'Mage Hand', level: 0},
    {name: 'Sleep', level: 1}

]
module.exports = { arcaneRecovery, characters, spellbooks, spells }