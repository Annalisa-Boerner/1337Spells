const base_url = "http://localhost:8080/api";

//needs post and delete routes to populate and depopulate

//start with ugly version: a form linked from an allSpells or allCantrips button

//then create automagic version where it submits the post

//fetch all spells currently in all spellbooks
export const fetchAllSpellbooks_Spells = async () => {
     try {
          const response = await fetch(`${base_url}/spellbooks_spells`);
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
};

//fetch spells by just one book
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
          const response = await fetch(`${base_url}/spellbooks_spells/${id}`, {
               method: "DELETE",
               headers: {
                    "Content-type": "application/json",
               },
          });
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          alert(
               "We're sorry, there was an error during deletion. Please try again once we've fixed it."
          );
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
