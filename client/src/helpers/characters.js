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

export const fetchSingleCharacter = async (id) => {
    try {
        const response = await fetch(`${base_url}/characters/${id}`);
        const result = await response.json();
        console.log("result in fetchSingleCharacter", result);
        return result;
    } catch (error) {
        console.error(error);
    }
};
