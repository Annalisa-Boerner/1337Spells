import { useState, useEffect } from "react";
import {
     deleteSpellbook_Spell,
     fetchAllSpellbooks_Spells,
} from "../helpers/junction_spellbooks";

export default function AllSpellbooks_Spells() {
     const [allSpellbooks_Spells, setAllSpellbooks_Spells] = useState([]);

     useEffect(() => {
          async function getAllSpellbooks_Spells() {
               const spellbooks_spells = await fetchAllSpellbooks_Spells();
               if (spellbooks_spells) {
                    setAllSpellbooks_Spells(spellbooks_spells);
                    return spellbooks_spells;
               } else {
                    console.error(
                         "there was an error fetching all spellbooks' spell content"
                    );
               }
          }
          getAllSpellbooks_Spells();
     }, []);

     function handleDelete() {
          deleteSpellbook_Spell();
     }
     return (
          <div id="all-spellbooks-spells">
               <h4>
                    Spellbooks_Spells Thru Table aka All The SpellBooks and
                    Their Spells
               </h4>
               {allSpellbooks_Spells.map((spellbook_spells) => {
                    return (
                         <div key={spellbook_spells.spellbooks_spells_id}>
                              <p>
                                   Spellbook ID: {spellbook_spells.spellbook_id}
                                   <br />
                                   Spell ID: {spellbook_spells.spell_id}
                                   <br />
                                   <button onClick={handleDelete}>
                                        Remove Spell
                                   </button>
                                   <br />
                                   <br />
                              </p>
                         </div>
                    );
               })}
          </div>
     );
}
