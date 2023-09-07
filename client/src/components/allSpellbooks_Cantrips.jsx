import { useState, useEffect } from "react";
import { fetchAllSpellbooks_Cantrips } from "../helpers/junction_spellbooks";

export default function AllSpellbooks_Cantrips() {
     const [allSpellbooks_Cantrips, setAllSpellbooks_Cantrips] = useState([]);

     useEffect(() => {
          async function getAllSpellbooks_Cantrips() {
               const spellbooks_cantrips = await fetchAllSpellbooks_Cantrips();
               if (spellbooks_cantrips) {
                    setAllSpellbooks_Cantrips(spellbooks_cantrips);
                    return spellbooks_cantrips;
               } else {
                    console.error(
                         "there was an error fetching all spellbooks' cantrip content"
                    );
               }
          }
          getAllSpellbooks_Cantrips();
     }, []);
     return (
          <div id="all-spellbooks-cantrips">
               <h4>
                    Spellbooks_Cantrips Thru Table aka All The SpellBooks and
                    Their Cantrips
               </h4>
               {allSpellbooks_Cantrips.map((spellbook_cantrips) => {
                    return (
                         <div key={spellbook_cantrips.spellbooks_cantrips_id}>
                              <p>
                                   Spellbook ID:{" "}
                                   {spellbook_cantrips.spellbook_id}
                                   <br />
                                   Cantrip ID: {spellbook_cantrips.cantrip_id}
                                   <br />
                                   <br />
                              </p>
                         </div>
                    );
               })}
          </div>
     );
}
