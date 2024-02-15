const base_url = "https://plankton-app-5feg7.ondigitalocean.app/";

export const fetchAllSpellbooks = async () => {
    try {
        const response = await fetch(`${base_url}/spellbooks`);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const fetchSingleSpellbook = async (id) => {
    try {
        const response = await fetch(`${base_url}/spellbooks/${id}`);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};
