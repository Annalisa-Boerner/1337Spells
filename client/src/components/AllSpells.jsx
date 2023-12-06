import { useState, useEffect } from "react";
import { fetchAllSpells } from "../helpers/spells";

export default function AllSpells() {
     const [allSpells, setAllSpells] = useState([]);
     const [searchParam, setSearchParam] = useState("");

     useEffect(() => {
          async function getAllSpells() {
               const spells = await fetchAllSpells();

               if (spells) {
                    setAllSpells(spells);

                    return spells;
               } else {
                    console.error("there was an error fetching all spells");
               }
          }
          getAllSpells();
          //   console.log("line 22, this is what's in allSpells: " + allSpells);
     }, []);

     const spellsToDisplay = searchParam
          ? allSpells.filter((spell) =>
                 spell.name.toLowerCase().includes(searchParam)
            )
          : allSpells;

     return (
          <section id="all-spells">
               <div id="search-spells">
                    <h3>All Spells</h3>
                    <label>
                         Search Spells:{""}
                         <input
                              id="search-spells-bar"
                              type="text"
                              placeholder="Search spells by name"
                              onChange={(event) =>
                                   setSearchParam(
                                        event.target.value.toLowerCase()
                                   )
                              }
                         />
                    </label>
               </div>
               <div>
                    {spellsToDisplay.map((spell) => {
                         return (
                              <div key={spell.spell_id}>
                                   <p>
                                        {spell.name}, {spell.spell_id}
                                   </p>
                              </div>
                         );
                    })}
               </div>
          </section>
     );
}