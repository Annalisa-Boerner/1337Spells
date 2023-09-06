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

export const fetchAllCantrips = async () => {
     try {
          const response = await fetch(`${base_url}/cantrips`);
          const result = await response.json();
          console.log(result);
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

export const fetchAllArcaneRecoveries = async () => {
     try {
          const response = await fetch(`${base_url}/arcanerecoveries`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

export const fetchSingleArcaneRecovery = async (id) => {
     try {
          const response = await fetch(`${base_url}/arcanerecoveries/${id}`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};
