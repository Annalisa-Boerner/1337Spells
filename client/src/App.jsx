import { useState, useEffect } from "react";
import { fetchAllSpells } from "./helpers/spells";
import "./App.css";
// import { spellList } from "./components/spellList";

function App() {
     const [allSpells, setAllSpells] = useState([]);

     useEffect(() => {
          async function fetchData() {
               const spells = await fetchAllSpells();
               setAllSpells(spells);
               console.log(spells);
               return spells;
          }
          fetchData();
     }, []);

     return <>Whats up danger</>;
}

export default App;
