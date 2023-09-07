import { useState, useEffect } from "react";
import { fetchAllCantrips } from "../helpers/cantrips";
import AddToSpellbookForm from "./addToSpellbookForm";

export default function AllCantrips() {
     const [allCantrips, setAllCantrips] = useState([]);
     const [searchParam, setSearchParam] = useState([]);

     useEffect(() => {
          async function getAllCantrips() {
               const cantrips = await fetchAllCantrips();

               //    console.log(apiResponse);
               if (cantrips) {
                    setAllCantrips(cantrips);

                    return cantrips;
               } else {
                    console.error("there was an error fetching all cantrips");
               }
          }
          getAllCantrips();
     }, []);

     const cantripsToDisplay = searchParam
          ? allCantrips.filter((cantrip) =>
                 cantrip.name.toLowerCase().includes(searchParam)
            )
          : allCantrips;

     return (
          <section id="all-cantrips">
               <div id="search-cantrips">
                    <label>
                         Search:{""}
                         <input
                              id="search-cantrips-bar"
                              type="text"
                              placeholder="Search cantrips by name"
                              onChange={(event) =>
                                   setSearchParam(
                                        event.target.value.toLowerCase()
                                   )
                              }
                         />
                    </label>
               </div>
               <div>
                    <h4>All Cantrips</h4>
                    {cantripsToDisplay.map((cantrip) => {
                         return (
                              <div key={cantrip.cantrip_id}>
                                   <p>{cantrip.name}</p>
                                   ;
                                   <AddToSpellbookForm />
                              </div>
                         );
                    })}
               </div>
          </section>
     );
}
