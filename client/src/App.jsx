import "./App.css";
import { useEffect, useState } from "react";
import MainSection from "./components/mainSection";
import Navbar from "./components/navBar";
// import { set } from "cypress/types/lodash";

function App() {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [charName, setCharName] = useState(null);

    useEffect(() => {
        setToken(window.localStorage.getItem("token"));
        setUserId(window.localStorage.getItem("userId"));
        setCharName(window.localStorage.getIteam("charName"));
    }, []);
    return (
        <>
            <div id="app-container">
                <Navbar token={token} setToken={setToken} />
                <MainSection
                    token={token}
                    setToken={setToken}
                    userId={userId}
                    setUserId={setUserId}
                    charName={charName}
                    setCharName={setCharName}
                />
            </div>
        </>
    );
}

export default App;
