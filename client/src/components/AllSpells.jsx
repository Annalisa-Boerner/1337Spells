import { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import DetailsButton from "./DetailsButton";
import { fetchAllApiSpells } from "../helpers/dnd5eApi";
import AddSpellButton from "./AddSpellButton";

export default function AllSpells({ charId }) {
    const [allSpells, setAllSpells] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        async function getAllSpells() {
            const spells = await fetchAllApiSpells();

            if (spells) {
                setAllSpells(spells.results);
                return spells;
            } else {
                console.error("there was an error fetching all spells");
            }
        }
        getAllSpells();
    }, []);

    // console.log("allSpells in  AllSpells line 24", allSpells);

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
            <br />
            <div id="allSpellNames">
                {spellsToDisplay.map((spell) => {
                    return (
                        <>
                            <Collapsible
                                trigger={"+" + " " + spell.name}
                                triggerWhenOpen={"—" + " " + spell.name}
                                key={spell.url}
                                transitionTime={200}
                            >
                                <AddSpellButton
                                    spell_id={spell.spell_id}
                                    charId={charId}
                                />
                                <DetailsButton />
                            </Collapsible>
                            <br />
                        </>
                    );
                })}
            </div>
        </section>
    );
}
