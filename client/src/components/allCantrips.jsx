import { useState, useEffect } from "react";
import { fetchAllCantrips } from "../helpers/cantrips";
import AddToSpellbookForm from "./addToSpellbookForm";

export default function AllCantrips() {
     const [allCantrips, setAllCantrips] = useState([]);

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
     return (
          <div id="all-cantrips">
               <h4>All Cantrips</h4>
               {allCantrips.map((cantrip) => {
                    return (
                         <div>
                              <p key={cantrip.cantrip_id}>{cantrip.name}</p>;
                              <AddToSpellbookForm />
                         </div>
                    );
               })}
          </div>
     );
}
