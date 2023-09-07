import AllSpellbooks_Cantrips from "./allSpellbooks_Cantrips";
import AllSpellbooks_Spells from "./allSpellbooks_Spells";
import AllSpells from "./allSpells";
import AllCantrips from "./allCantrips";
import AddToSpellbooksSpells from "./addSpells";
import AddToSpellbooksCantrips from "./addCantrips";

export default function MySpellbook() {
     return (
          <div>
               <p>My Spellbook</p>
               <AllSpellbooks_Spells />
               <AllSpells />
               <AddToSpellbooksSpells />
               <AllSpellbooks_Cantrips />
               <AllCantrips />
               <AddToSpellbooksCantrips />
          </div>
     );
}
