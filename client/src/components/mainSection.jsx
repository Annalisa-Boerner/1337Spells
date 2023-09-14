//handles routing; loads the main content

// import AllCantrips from "./allCantrips";
// import AllSpellbooks_Cantrips from "./allSpellbooks_Cantrips";
// import AllSpellbooks_Spells from "./allSpellbooks_Spells";
// import AllSpells from "./allSpells";

import { Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import MySpellbook from "./mySpellbook";
// import { BrowseSpells } from "./browseSpells";
import Login from "./login";

export default function MainSection({ token, setToken }) {
     return (
          <div id="main-section">
               <Routes>
                    <Route
                         path="/"
                         element={
                              <HomePage token={token} setToken={setToken} />
                         }
                    />
                    <Route path="/myspellbook" element={<MySpellbook />} />
                    <Route
                         path="/"
                         element={<Login token={token} setToken={setToken} />}
                    />
               </Routes>
          </div>
     );
}
