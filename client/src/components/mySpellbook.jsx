import AllSpellbooks_Cantrips from "./allSpellbooks_Cantrips";
import AllSpellbooks_Spells from "./allSpellbooks_Spells";
import AllSpells from "./allSpells";
import AllCantrips from "./allCantrips";
// import AddToSpellbooksSpells from "./addToSpellbooksSpells";

export default function MySpellbook() {
     return (
          <div>
               <p>My Spellbook</p>
               <AllSpellbooks_Spells />
               <AllSpells />
               <AllSpellbooks_Cantrips />
               <AllCantrips />
          </div>
     );
}
