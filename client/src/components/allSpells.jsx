import { useState, useEffect } from "react";
import { fetchAllSpells } from "../helpers/spells";
import AddToSpellbookForm from "./addToSpellbookForm";

export default function AllSpells() {
     const [allSpells, setAllSpells] = useState([]);

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
     return (
          <div id="all-spells">
               <h4>All Spells</h4>
               {allSpells.map((spell) => {
                    return (
                         <div>
                              <p key={spell.spell_id}>{spell.name}</p>
                              <AddToSpellbookForm key={spell.spell_id} />
                         </div>
                    );
               })}
          </div>
     );
}
