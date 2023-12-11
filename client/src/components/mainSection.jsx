//handles routing; loads the main content

// import AllCantrips from "./allCantrips";
// import AllSpellbooks_Cantrips from "./allSpellbooks_Cantrips";
// import AllSpellbooks_Spells from "./allSpellbooks_Spells";
// import AllSpells from "./allSpells";

import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MySpellbook from "./mySpellbook";
// import { BrowseSpells } from "./browseSpells";
import Login from "./Login";
import Logout from "./Logout";

export default function MainSection({
    token,
    setToken,
    charId,
    setCharId,
    charName,
    setCharName,
}) {
    return (
        <div id="main-section">
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            token={token}
                            setToken={setToken}
                            charId={charId}
                            setUserId={setCharId}
                            charName={charName}
                            setCharName={setCharName}
                        />
                    }
                />
                <Route
                    path="/myspellbook"
                    element={
                        <MySpellbook
                            token={token}
                            charId={charId}
                            charName={charName}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login
                            token={token}
                            setToken={setToken}
                            charId={charId}
                            setCharId={setCharId}
                            charName={charName}
                            setCharName={setCharName}
                        />
                    }
                />
                <Route
                    path="/logout"
                    element={
                        <Logout
                            token={token}
                            setToken={setToken}
                            charId={charId}
                            setCharId={setCharId}
                            charName={charName}
                            setCharName={setCharName}
                        />
                    }
                />
            </Routes>
        </div>
    );
}
