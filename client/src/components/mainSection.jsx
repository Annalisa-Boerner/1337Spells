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
import Logout from "./logout";

export default function MainSection({ token, setToken, userId, setUserId }) {
    return (
        <div id="main-section">
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            token={token}
                            setToken={setToken}
                            userId={userId}
                            setUserId={setUserId}
                        />
                    }
                />
                <Route
                    path="/myspellbook"
                    element={
                        <MySpellbook
                            token={token}
                            userId={userId}
                            setUserId={setUserId}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login
                            token={token}
                            setToken={setToken}
                            userId={userId}
                            setUserId={setUserId}
                        />
                    }
                />
                <Route
                    path="/logout"
                    element={
                        <Logout
                            token={token}
                            setToken={setToken}
                            userId={userId}
                            setUserId={setUserId}
                        />
                    }
                />
            </Routes>
        </div>
    );
}
