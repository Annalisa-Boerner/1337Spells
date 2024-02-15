const base_url = "https://plankton-app-5feg7.ondigitalocean.app/api";

export const fetchAllCharacters = async () => {
    try {
        const response = await fetch(`${base_url}/characters`);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const fetchSingleCharacter = async (character_id) => {
    try {
        // console.log("frontend helper character_id", character_id);
        const response = await fetch(`${base_url}/characters/${character_id}`);
        const result = await response.json();
        console.log("result in frontend helper fetchSingleCharacter", result);
        return result;
    } catch (error) {
        console.error(
            "there has been an error fetching this character's profile",
            error
        );
    }
};
