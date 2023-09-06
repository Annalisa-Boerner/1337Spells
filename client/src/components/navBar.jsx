//navigation for the site

// import { Link } from "react-router-dom";
import BrowseSpells from "./browseSpells";
import Homebrew from "./homebrew";
import Login from "./login";
import MySpellbook from "./mySpellbook";

export default function Navbar() {
     return (
          <div id="navbar-container">
               <h2>Navbar</h2>
               <Homebrew />
               <MySpellbook />
               <BrowseSpells />
               <Login />
          </div>
     );
}
