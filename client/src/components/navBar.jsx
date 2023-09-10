//navigation for the site
// import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Login from "./login";

export default function Navbar() {
     return (
          <div id="navbar-container">
               <Link to="/">Home</Link>
               <Link to="/myspellbook">My Spellbook</Link>
               <a href="https://shorturl.at/bjquF" target="_blank">
                    Browse Spells (External)
               </a>
               <Link to="/login">Login</Link>
          </div>
     );
}
