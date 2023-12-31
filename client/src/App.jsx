import "./App.css";
import { useEffect, useState } from "react";
import MainSection from "./components/MainSection";
import Navbar from "./components/NavBar";
// import { set } from "cypress/types/lodash";

function App() {
    const [token, setToken] = useState(null);
    const [charId, setCharId] = useState(null);
    const [charName, setCharName] = useState(null);

    useEffect(() => {
        setToken(window.localStorage.getItem("token"));
        setCharId(window.localStorage.getItem("charId"));
        setCharName(window.localStorage.getItem("charName"));
    }, []);

    console.log("charId in app", charId);
    return (
        <>
            <div id="app-container">
                <Navbar token={token} setToken={setToken} />
                <MainSection
                    token={token}
                    setToken={setToken}
                    charId={charId}
                    setCharId={setCharId}
                    charName={charName}
                    setCharName={setCharName}
                />
            </div>
        </>
    );
}

export default App;
