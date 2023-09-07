//handles routing; loads the main content

// import AllCantrips from "./allCantrips";
// import AllSpellbooks_Cantrips from "./allSpellbooks_Cantrips";
// import AllSpellbooks_Spells from "./allSpellbooks_Spells";
// import AllSpells from "./allSpells";

import { Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import MySpellbook from "./mySpellbook";
import AddToSpellbooksSpells from "./addSpells";
// import { BrowseSpells } from "./browseSpells";
// import { Login } from "./login";

export default function MainSection() {
     return (
          <div id="main-section">
               <h3>Main Section</h3>

               <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/myspellbook" element={<MySpellbook />} />
                    <Route
                         path="/addspells"
                         element={<AddToSpellbooksSpells />}
                    />
               </Routes>
          </div>
     );
}
