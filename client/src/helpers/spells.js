const base_url = "https://plankton-app-5feg7.ondigitalocean.app";

export const fetchAllSpells = async () => {
    try {
        const response = await fetch(`${base_url}/spells`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const fetchSingleSpell = async (id) => {
    try {
        const response = await fetch(`${base_url}/spells/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const fetchCharacterSpellsByCharacterId = async (character_id) => {
    try {
        const response = await fetch(
            `${base_url}/characters_spells/${character_id}`
        );
        // console.log(
        //     "character_id in fetchCharacterSpellsByCharacterId",
        //     character_id
        // );
        const result = await response.json();
        // console.log("result from fetchCharacterSpellsByCharacterId", result);
        return result;
    } catch (error) {
        console.error(
            "there was an error fetching this character's spells",
            error
        );
    }
};
