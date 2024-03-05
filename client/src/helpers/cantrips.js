// const base_url = "https://plankton-app-5feg7.ondigitalocean.app/api";
const base_url = "http://localhost:8080/api"


export const fetchAllCantrips = async () => {
    try {
        const response = await fetch(`${base_url}/cantrips`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const fetchSingleCantrip = async (id) => {
    try {
        const response = await fetch(`${base_url}/cantrips/${id}`);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const fetchCharacterCantripsByCharacterId = async (character_id) => {
    try {
        const response = await fetch(
            `${base_url}/characters_cantrips/${character_id}`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(
            "there was an error fetching this character's cantrips",
            error
        );
    }
};
