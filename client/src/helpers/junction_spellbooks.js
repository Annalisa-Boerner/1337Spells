const base_url = "http://localhost:8080/api";

export const fetchAllSpellbooks_Spells = async () => {
     try {
          const response = await fetch(`${base_url}/spellbooks_spells`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

export const fetchSingleSpellbook_Spells = async (id) => {
     try {
          const response = await fetch(`${base_url}/spellbooks_spells/${id}`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

export const fetchAllSpellbooks_Cantrips = async () => {
     try {
          const response = await fetch(`${base_url}/spellbooks_cantrips`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

export const fetchSingleSpellbook_Cantrips = async (id) => {
     try {
          const response = await fetch(`${base_url}/spellbooks_cantrips/${id}`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};
