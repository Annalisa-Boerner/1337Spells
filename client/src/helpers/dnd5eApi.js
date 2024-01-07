const base_url = "https://www.dnd5eapi.co/api/";

export const fetchAllApiSpells = async () => {
    try {
        const response = await fetch(`${base_url}/spells?level=1`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(
            "there was an error fetching all spells from the API",
            error
        );
    }
};

export const fetchAllApiCantrips = async () => {
    try {
        const response = await fetch(`${base_url}/spells?level=0`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(
            "there was an error fetching all cantrips from the API",
            error
        );
    }
};

//grabs spell or cantrip details
export const fetchSpellByIndex = async (spell_index) => {
    try {
        const response = await fetch(`${base_url}/spells/${spell_index}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(
            "there was an error fetching these spell details from the API",
            error
        );
    }
};

//may not be necessary due to all dnd5e api spells and cantrips having the same api endpoint

// export const fetchCantripByIndex = async ({ cantrip_index }) => {
//     try {
//         const response = await fetch(`${base_url}/spells/${cantrip_index}`);
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         console.error(
//             "there was an error fetching these spell details from the API",
//             error
//         );
//     }
// };
