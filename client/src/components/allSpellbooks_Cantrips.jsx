import { useState, useEffect } from "react";
import {
     deleteSpellbook_Cantrip,
     fetchAllSpellbooks_Cantrips,
} from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

//Get all spellbooks and their cantrips

export default function AllSpellbooks_Cantrips() {
     const [allSpellbooks_Cantrips, setAllSpellbooks_Cantrips] = useState([]);
     const [searchParam, setSearchParam] = useState("");

     const navigate = useNavigate();

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

     //Delete a cantrip from a spellbook

     async function handleDelete(event) {
          event.preventDefault();
          try {
               await deleteSpellbook_Cantrip(event.target.id);
               navigate(0);
          } catch (error) {
               console.error(error);
          }
     }

     //Filter spellbooks to only show your own cantrips

     const spellbooksToDisplay2 = searchParam
          ? allSpellbooks_Cantrips.filter((spellbook2) =>
                 spellbook2.spellbook_id.toString().includes(searchParam)
            )
          : allSpellbooks_Cantrips;

     //Render the filter bar and spellbooks/cantrips
     return (
          <section id="cantrip-side" className="flex-column">
               <label>
                    <h3>Spellbook ID:{""}</h3>
                    <br />
                    <input
                         id="search-spellbooks-cantrips-bar"
                         type="text"
                         placeholder="Search spellbooks by number"
                         onChange={(event) =>
                              setSearchParam(event.target.value)
                         }
                    />
               </label>
               {spellbooksToDisplay2.map((spellbook_cantrips) => {
                    return (
                         <div
                              className="flex"
                              key={spellbook_cantrips.spellbooks_cantrips_id}
                         >
                              <p>
                                   Spellbook ID:{" "}
                                   {spellbook_cantrips.spellbook_id}
                                   <br />
                                   Cantrip: {spellbook_cantrips.cantrip_name}
                                   <br />
                                   <button
                                        className="remove-cantrip-button"
                                        onClick={handleDelete}
                                        id={
                                             spellbook_cantrips.spellbooks_cantrips_id
                                        }
                                   >
                                        Remove Cantrip
                                   </button>
                                   <br />
                              </p>
                         </div>
                    );
               })}
          </section>
     );
}
