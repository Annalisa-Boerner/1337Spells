//handles routing; loads the main content

// import AllCantrips from "./AllCantrips";
// import AllSpells from "./AllSpells";

import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MySpellbook from "./MySpellbook";
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
