const base_url = "http://localhost:8080/api";

//Junction tables:
//start with ugly version: a form linked from an allSpells or allCantrips button
//then create automagic version where a button under the spell/cantrip submits the post to the appropriate junction table

//GET all spells currently in all spellbooks
export const fetchAllCharacters_Spells = async () => {
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
export const fetchCharacters_SpellsByCharacterId = async (character_id) => {
    try {
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

//delete a single spell from a single spellbook aka one table row
export const deleteCharacter_Spell = async (spell_id) => {
    try {
        console.log("removing spell");
        await fetch(`${base_url}/characters_spells/${spell_id}`, {
            method: "DELETE",
        });
        console.log("spell successfully deleted");
    } catch (error) {
        alert(
            "We're sorry, there was an error during deletion. Please try again once we've fixed it."
        );
    }
};

//POST a spell to spellbooks_spells
export async function createCharacter_spell(spell_id, char_id) {
    try {
        const response = await fetch(`${base_url}/characters_spells`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                spell_id,
                char_id,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
//GET ALL CANTRIPS IN ALL BOOKS
export const fetchAllCharacters_Cantrips = async () => {
    try {
        const response = await fetch(`${base_url}/characters_cantrips`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
//GET SINGLE BOOK'S CANTRIPS
export const fetchSingleCharacter_Cantrips = async (id) => {
    try {
        const response = await fetch(`${base_url}/characters_cantrips/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

//POST A CANTRIP TO SPELLBOOKS_CANTRIPS
export async function createCharacter_cantrip(
    cantrip_id,
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
                cantrip_id,
                char_id,
                cantrip_name,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

//delete a single cantrip from the spellbook

export const deleteCharacter_Cantrip = async (id) => {
    try {
        await fetch(`${base_url}/characters_cantrip/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        alert(
            "We're sorry, there was an error during deletion. Please try again once we've fixed it."
        );
    }
};
