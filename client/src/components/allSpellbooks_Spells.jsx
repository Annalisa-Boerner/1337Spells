import { useState, useEffect } from "react";
import {
     deleteSpellbook_Spell,
     fetchAllSpellbooks_Spells,
} from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AllSpellbooks_Spells() {
     const [allSpellbooks_Spells, setAllSpellbooks_Spells] = useState([]);
     const navigate = useNavigate();
     // console.log("line 9 version: " + JSON.stringify(allSpellbooks_Spells[0]));
     // let id = allSpellbooks_Spells.spellbooks_spells_id;

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

     async function handleDelete(event) {
          event.preventDefault();
          try {
               const result = await deleteSpellbook_Spell(event.target.id);
               navigate(0);
          } catch (error) {
               console.error(error);
          }
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
                                   Spell: {spellbook_spells.spell_name}
                                   <br />
                                   SBSid:
                                   {spellbook_spells.spellbooks_spells_id}
                                   <button
                                        onClick={handleDelete}
                                        id={
                                             spellbook_spells.spellbooks_spells_id
                                        }
                                   >
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
