// const base_url = "https://plankton-app-5feg7.ondigitalocean.app/api";
const base_url = "http://localhost:8080/api"

//GET all spells of all characters
export const fetchAllCharactersSpells = async () => {
    try {
        const response = await fetch(`${base_url}/characters_spells`);
        const result = await response.json();
        console.log("result from fetchAllCharacters_Spells", result);
        return result;
    } catch (error) {
        console.error(
            "there was an error fetching all characters' spells",
            error
        );
    }
};

//GET spells by just one character
export const fetchCharactersSpellsByCharacterId = async (character_id) => {
    try {
        console.log(
            "entering try in helpers/junction_spellbooks fetch spells by char ID",
            character_id
        );
        const response = await fetch(
            `${base_url}/characters_spells/${character_id}`
        );
        const result = await response.json();
        console.log("result from fetchCharacters_SpellsByCharacterId", result);
        return result;
    } catch (error) {
        console.error(
            "there was an error fetching this individual character's spells",
            error
        );
    }
};

//POST a spell to characters_spells
export async function createCharacterSpell(spell_index, char_id, spell_name) {
    try {
        console.log("entering try in createCharacterSpell");
        const response = await fetch(`${base_url}/characters_spells`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                spell_index: spell_index,
                character_id: char_id,
                spell_name: spell_name,
            }),
        });
        const result = await response.json();
        console.log("result from front end createCharacter_spell", result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

//DELETE a single spell from the character's spellbook
export const deleteCharacterSpell = async (characters_spells_id) => {
    try {
        await fetch(
            `${base_url}/characters_spells/characters_spells/${characters_spells_id}`,
            {
                method: "DELETE",
            }
        );
    } catch (error) {
        alert("We're sorry, there was an error during deletion.");
    }
};

// ---CANTRIPS BELOW THIS LINE---

//GET all cantrips of all characters
export const fetchAllCharactersCantrips = async () => {
    try {
        const response = await fetch(`${base_url}/characters_cantrips`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

//GET cantrips for just one character
export const fetchCharactersCantripsByCharacterId = async (character_id) => {
    try {
        const response = await fetch(
            `${base_url}/characters_cantrips/${character_id}`
        );
        const result = await response.json();
        console.log(
            "result from fetchCharacters_CantripsByCharacterId",
            result
        );
        return result;
    } catch (error) {
        console.error(
            "there was an error fetching this individual character's cantrips",
            error
        );
    }
};

//POST a cantrip to characters_cantrips
export async function createCharacterCantrip(
    cantrip_index,
    char_id,
    cantrip_name
) {
    try {
        const response = await fetch(`${base_url}/characters_cantrips`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cantrip_index: cantrip_index,
                character_id: char_id,
                cantrip_name: cantrip_name,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

//DELETE a single cantrip from the character's spellbook

export const deleteCharacterCantrip = async (characters_cantrips_id) => {
    try {
        await fetch(
            `${base_url}/characters_cantrips/characters_cantrips/${characters_cantrips_id}`,
            {
                method: "DELETE",
            }
        );
    } catch (error) {
        alert("We're sorry, there was an error during deletion.");
        console.log(error);
    }
};
