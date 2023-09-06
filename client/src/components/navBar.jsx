//navigation for the site
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Login from "./login";
import MySpellbook from "./mySpellbook";

export default function Navbar() {
     return (
          <div id="navbar-container">
               <h2>Navbar</h2>
               <MySpellbook />
               <Link
                    to={{
                         pathname: "https://shorturl.at/bjquF",
                    }}
                    target="_blank"
               >
                    Browse Spells (External)
               </Link>
               <Login />
          </div>
     );
}
