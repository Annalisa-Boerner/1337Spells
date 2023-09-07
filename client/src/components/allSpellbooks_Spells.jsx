import { useState, useEffect } from "react";
import {
     deleteSpellbook_Spell,
     fetchAllSpellbooks_Spells,
} from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

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

     async function handleDelete(event) {
          event.preventDefault();
          try {
               await deleteSpellbook_Spell(event.target.id);
               navigate(0);
          } catch (error) {
               console.error(error);
          }
     }

     console.log("line 39 ", allSpellbooks_Spells[0]);

     const spellbooksToDisplay = searchParam
          ? allSpellbooks_Spells.filter((spellbook) =>
                 spellbook.spellbook_id.includes(searchParam)
            )
          : allSpellbooks_Spells;
     return (
          <section id="search-spellbooks-spells">
               <div>
                    <label>
                         <h3>Please Enter Your Spellbook ID:{""}</h3>
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
                    <br />
                    <h4>Search to Display Your Spellbook</h4>
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
