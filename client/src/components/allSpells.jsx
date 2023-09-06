import { useState, useEffect } from "react";
import { fetchAllSpells } from "../helpers/spells";
// import { Spell } from "./oneSpell";

export default function AllSpells() {
     const [allSpells, setAllSpells] = useState([]);

     useEffect(() => {
          async function getAllSpells() {
               const spells = await fetchAllSpells();

               //    console.log(apiResponse);
               if (spells) {
                    setAllSpells(spells);

                    return spells;
               } else {
                    console.error("there was an error fetching all spells");
               }
          }
          getAllSpells();
          console.log("line 22, this is what's in allSpells: " + allSpells);
     }, []);
     return (
          <div id="all-spells">
               {allSpells.map((spell) => {
                    return <p key={spell.spell_id}>{spell.name}</p>;
               })}
          </div>
     );
}
