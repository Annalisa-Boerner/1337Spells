import "./App.css";
import { useState } from "react";
import MainSection from "./components/mainSection";
import Navbar from "./components/navBar";
// import { set } from "cypress/types/lodash";

function App() {
     const [token, setToken] = useState(null);
     return (
          <>
               <div id="app-container">
                    <Navbar token={token} setToken={setToken} />
                    <MainSection token={token} setToken={setToken} />
               </div>
          </>
     );
}

export default App;
