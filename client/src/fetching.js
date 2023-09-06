const base_url = "http://localhost:8080/api/";

export const fetchAllSpells = async () => {
     try {
          const response = await fetch(`${base_url}/spells`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

export const fetchSingleSpell = async (id) => {
     try {
          const response = await fetch(`${base_url}/spells/${id}`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};
