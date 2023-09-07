import { useState } from "react";
import { createSpellbook_spell } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddToSpellbooksSpells() {
     const [spell_id, setSpell_id] = useState("");
     const [spellbook_id, setSpellbook_id] = useState("");
     const [spell_name, setSpell_name] = useState("");
     const navigate = useNavigate();

     async function handleSubmit(event) {
          event.preventDefault();
          try {
               const APIData = await createSpellbook_spell(
                    spell_id,
                    spellbook_id,
                    spell_name
               );
               console.log("API data from handleSubmit: ", APIData);
               navigate("/myspellbook");
               //reset the listed spells?
          } catch (error) {
               alert("There was an error adding this spell to your spellbook");
          }
     }

     return (
          <section>
               <form onSubmit={handleSubmit}>
                    <input
                         value={spell_id}
                         type="text"
                         name="spell_id"
                         placeholder="Spell ID"
                         onChange={(event) => setSpell_id(event.target.value)}
                    />
                    <br />

                    <input
                         value={spellbook_id}
                         type="text"
                         name="spellbook_id"
                         placeholder="Spellbook ID"
                         onChange={(event) =>
                              setSpellbook_id(event.target.value)
                         }
                    />

                    <br />

                    <input
                         value={spell_name}
                         type="text"
                         name="spell_name"
                         placeholder="Spell Name"
                         onChange={(event) => setSpell_name(event.target.value)}
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
               </form>
          </section>
     );
}
