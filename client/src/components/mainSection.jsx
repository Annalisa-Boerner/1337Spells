//handles routing; loads the main content

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./homePage";
import { Homebrew } from "./homebrew";
import { MySpellbook } from "./mySpellbook";
import { BrowseSpells } from "./browseSpells";
import { Login } from "./login";

export default function MainSection() {
     return (
          <div id="main-section">
               <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/homebrew" element={<Homebrew />} />
                    <Route path="/myspellbook" element={<MySpellbook />} />
                    <Route path="/browsespells" element={<BrowseSpells />} />
                    <Route path="/login" element={<Login />} />
               </Routes>
          </div>
     );
}
