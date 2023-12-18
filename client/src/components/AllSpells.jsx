import { useState, useEffect } from "react";
import { fetchAllSpells } from "../helpers/spells";
import { fetchAllApiSpells } from "../helpers/dnd5eApi";
import AddSpellButton from "./AddSpellButton";

export default function AllSpells({ charId }) {
    const [allSpells, setAllSpells] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        async function getAllSpells() {
            const spells = await fetchAllApiSpells();

            if (spells) {
                setAllSpells(spells);
                return spells;
            } else {
                console.error("there was an error fetching all spells");
            }
        }
        getAllSpells();
    }, []);

    console.log("allSpells in  AllSpells line 24", allSpells);

    const spellsToDisplay = searchParam
        ? allSpells.filter((spell) =>
              spell.name.toLowerCase().includes(searchParam)
          )
        : allSpells;

    return (
        <section id="all-spells">
            <div id="search-spells">
                <h3>All Spells</h3>
                <label>
                    <input
                        id="search-spells-bar"
                        type="text"
                        placeholder="Search spells by name"
                        onChange={(event) =>
                            setSearchParam(event.target.value.toLowerCase())
                        }
                    />
                </label>
            </div>
            <div>
                {spellsToDisplay.map((spell) => {
                    return (
                        <div key={spell.spell_id}>
                            <p>{spell.name}</p>
                            <AddSpellButton
                                spell_id={spell.spell_id}
                                charId={charId}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
