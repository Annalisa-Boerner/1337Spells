import { useState, useEffect } from "react";
import { fetchCharacterSpellsByCharacterId } from "../helpers/spells";

export default function SingleCharSpells({ charId }) {

    // const [searchParam, setSearchParam] = useState("");
    const [charSpells, setCharSpells] = useState([])
    const [allSpells, setAllSpells] = useState([]);

//FETCH THE CHARACTER'S SPELLS
    useEffect(() => {
        async function getCharacterSpells() {
            const charSpells = await fetchCharacterSpellsByCharacterId(charId);

            if (charSpells) {
                setCharSpells(charSpells);
                console.log("charSpells in SingleCharSpells", charSpells);
                return charSpells;
            } else {
                console.error("there was an error fetching this character's spells", error);
            }
        }
        getCharacterSpells();
    }, []);

//FETCH ALL SPELLS

useEffect(()=> {
    async function getAllSpells() {
        const 
    }
})

    return (
        <section id="char-spells">
            <h2>char spells here</h2>
            {/* <div id="search-spells">
                <h3>All Spells</h3>
                <label>
                    Search Spells:{""}
                    <input
                        id="search-spells-bar"
                        type="text"
                        placeholder="Search spells by name"
                        onChange={(event) =>
                            setSearchParam(event.target.value.toLowerCase())
                        }
                    />
                </label>
            </div> */}
            <div>
                {spells.map((spell) => {
                    return (
                        <div key={spell.spell_id}>
                            <p>{spell.spell_id}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
