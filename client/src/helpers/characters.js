const base_url = "http://localhost:8080/api";

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
        // console.log("result in fetchSingleCharacter", result);
        return result;
    } catch (error) {
        console.error(error);
    }
};
