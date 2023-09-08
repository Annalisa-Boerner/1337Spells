const base_url = "http://localhost:8080/api";

//Junction tables:
//start with ugly version: a form linked from an allSpells or allCantrips button
//then create automagic version where a button under the spell/cantrip submits the post to the appropriate junction table

//GET all spells currently in all spellbooks
export const fetchAllSpellbooks_Spells = async () => {
     try {
          const response = await fetch(`${base_url}/spellbooks_spells`);
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
};

//GET spells by just one book
export const fetchSingleSpellbook_Spells = async (id) => {
     try {
          const response = await fetch(`${base_url}/spellbooks_spells/${id}`);
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
};

//delete a single spell from a single spellbook aka one table row
export const deleteSpellbook_Spell = async (id) => {
     try {
          await fetch(`${base_url}/spellbooks_spells/${id}`, {
               method: "DELETE",
          });
     } catch (error) {
          alert(
               "We're sorry, there was an error during deletion. Please try again once we've fixed it."
          );
     }
};

//POST a spell to spellbooks_spells
export async function createSpellbook_spell(
     spell_id,
     spellbook_id,
     spell_name
) {
     try {
          const response = await fetch(`${base_url}/spellbooks_spells`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    spell_id,
                    spellbook_id,
                    spell_name,
               }),
          });
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
}
//GET ALL CANTRIPS IN ALL BOOKS
export const fetchAllSpellbooks_Cantrips = async () => {
     try {
          const response = await fetch(`${base_url}/spellbooks_cantrips`);
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
};
//GET SINGLE BOOK'S CANTRIPS
export const fetchSingleSpellbook_Cantrips = async (id) => {
     try {
          const response = await fetch(`${base_url}/spellbooks_cantrips/${id}`);
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
};

//POST A CANTRIP TO SPELLBOOKS_CANTRIPS
export async function createSpellbook_cantrip(
     cantrip_id,
     spellbook_id,
     cantrip_name
) {
     try {
          const response = await fetch(`${base_url}/spellbooks_cantrips`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    cantrip_id,
                    spellbook_id,
                    cantrip_name,
               }),
          });
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
}

//delete a single cantrip from the spellbook

export const deleteSpellbook_Cantrip = async (id) => {
     try {
          await fetch(`${base_url}/spellbooks_cantrip/${id}`, {
               method: "DELETE",
          });
     } catch (error) {
          alert(
               "We're sorry, there was an error during deletion. Please try again once we've fixed it."
          );
     }
};
