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
