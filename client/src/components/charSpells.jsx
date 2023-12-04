import { useState, useEffect } from "react";
import { fetchCharacterSpellsByCharacterId } from "../helpers/spells";

export default function CharSpells({ charId }) {
    const [spells, setSpells] = useState([]);
    // const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        async function getCharacterSpells() {
            const spells = await fetchCharacterSpellsByCharacterId(charId);

            if (spells) {
                setSpells(spells);
                // console.log("spells in charSpells", spells);
                return spells;
            } else {
                console.error("there was an error fetching all spells");
            }
        }
        getCharacterSpells();
    }, []);

    // const spellsToDisplay = searchParam
    //     ? allSpells.filter((spell) =>
    //           spell.name.toLowerCase().includes(searchParam)
    //       )
    //     : allSpells;

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
                            <p>
                                {spell.name}, {spell.spell_id}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
