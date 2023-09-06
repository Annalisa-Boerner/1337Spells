//handles routing; loads the main content

import AllCantrips from "./allCantrips";
import AllSpellbooks_Spells from "./allSpellbooks_Spells";
import AllSpells from "./allSpells";

// import { Routes, Route } from "react-router-dom";
// import { HomePage } from "./homePage";
// import { MySpellbook } from "./mySpellbook";
// import { BrowseSpells } from "./browseSpells";
// import { Login } from "./login";

export default function MainSection() {
     return (
          <div id="main-section">
               <h3>Main Section</h3>
               <AllSpellbooks_Spells />
               <AllSpells />
               <AllCantrips />
               {/* <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/myspellbook" element={<MySpellbook />} />
                    <Route path="/browsespells" element={<BrowseSpells />} /> 
                    <Route path="/login" element={<Login />} />
               </Routes> */}
          </div>
     );
}
