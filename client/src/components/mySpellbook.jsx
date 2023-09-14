import AllSpellbooks_Cantrips from "./allSpellbooks_Cantrips";
import AllSpellbooks_Spells from "./allSpellbooks_Spells";
import AllSpells from "./allSpells";
import AllCantrips from "./allCantrips";
import AddToSpellbooksSpells from "./addSpells";
import AddToSpellbooksCantrips from "./addCantrips";

export default function MySpellbook({ token }) {
     return (
          <>
               {token ? (
                    <section>
                         <h2>My Spellbook</h2>
                         <div className="flex-titles">
                              <h4>My Spells (Limit 6)</h4>
                              <div className="space-between"></div>
                              <h4>My Cantrips (Limit 3)</h4>
                         </div>
                         <br />
                         <div id="spellbookContainer">
                              <div id="leftside">
                                   <AllSpellbooks_Spells />
                                   <AllSpells />
                                   <AddToSpellbooksSpells />
                              </div>
                              <div className="spacebetween"></div>
                              <div id="rightside">
                                   <AllSpellbooks_Cantrips />
                                   <AllCantrips />
                                   <AddToSpellbooksCantrips />
                              </div>
                         </div>
                    </section>
               ) : (
                    <h2>Please log in using the link above.</h2>
               )}
          </>
     );
}
