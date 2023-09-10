import { useState, useEffect } from "react";
import {
     deleteSpellbook_Spell,
     fetchAllSpellbooks_Spells,
} from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

//get all the spellbooks with their spells

export default function AllSpellbooks_Spells() {
     const [allSpellbooks_Spells, setAllSpellbooks_Spells] = useState([]);
     const [searchParam, setSearchParam] = useState("");

     const navigate = useNavigate();

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

     //Delete a spell from a spellbook

     async function handleDelete(event) {
          event.preventDefault();
          try {
               await deleteSpellbook_Spell(event.target.id);
               navigate(0);
          } catch (error) {
               console.error(error);
          }
     }

     //Filter spellbooks to only show your own spells

     const spellbooksToDisplay = searchParam
          ? allSpellbooks_Spells.filter((spellbook) =>
                 spellbook.spellbook_id.toString().includes(searchParam)
            )
          : allSpellbooks_Spells;

     //Render the filter bar and spellbooks/spells
     return (
          <section id="spell-side">
               <div id="search-spellbooks-spells">
                    <label>
                         <h3>Spellbook ID:{""}</h3>
                         <br />
                         <input
                              id="search-spellbooks-spells-bar"
                              type="text"
                              placeholder="Search spellbooks by number"
                              onChange={(event) =>
                                   setSearchParam(event.target.value)
                              }
                         />
                    </label>
               </div>

               <div id="all-spellbooks-spells">
                    {spellbooksToDisplay.map((spellbook_spells) => {
                         return (
                              <div key={spellbook_spells.spellbooks_spells_id}>
                                   <p>
                                        Spellbook ID:{" "}
                                        {spellbook_spells.spellbook_id}
                                        <br />
                                        Spell: {spellbook_spells.spell_name}
                                        <br />
                                        <button
                                             className="remove-spell-button"
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
          </section>
     );
}
