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
               createSpellbook_spell(spell_id, spellbook_id, spell_name);

               navigate("/myspellbook");
          } catch (error) {
               alert("There was an error adding this spell to your spellbook");
          }
     }

     return (
          <section id="addSpell-container">
               <h3>Add A Spell to My Spellbook</h3>
               <form onSubmit={handleSubmit}>
                    <input
                         className="new-spell-form-bar"
                         value={spell_id}
                         type="text"
                         name="spell_id"
                         placeholder="Spell ID - Integer by All Spells Listing"
                         onChange={(event) => setSpell_id(event.target.value)}
                    />
                    <br />

                    <input
                         className="new-spell-form-bar"
                         value={spellbook_id}
                         type="text"
                         name="spellbook_id"
                         placeholder="Spellbook ID - Your Book"
                         onChange={(event) =>
                              setSpellbook_id(event.target.value)
                         }
                    />

                    <br />

                    <input
                         className="new-spell-form-bar"
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
