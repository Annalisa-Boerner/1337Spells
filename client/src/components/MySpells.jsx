import { useState, useEffect } from "react";
import { fetchCharacterSpellsByCharacterId } from "../helpers/spells";
import Collapsible from "react-collapsible";
import DetailsButton from "./DetailsButton";
import RemoveSpellButton from "./RemoveSpellButton";

export default function MySpells({ charIdNum }) {
    const [charSpells, setCharSpells] = useState([]);

    //FETCH THE CHARACTER'S SPELLS
    useEffect(() => {
        async function getCharacterSpells() {
            console.log('charIdNum in getCharacterSpells', charIdNum)
            const charSpells = await fetchCharacterSpellsByCharacterId(
                charIdNum
            );
            if (charSpells) {
                setCharSpells(charSpells);
                return charSpells;
            } else {
                console.error(
                    "there was an error fetching this character's spells"
                );
            }
        }
        getCharacterSpells();
    }, [charIdNum]);
    return (
        <section id="myCantrips">
            <h3 id="mySpellsTitle">My Spells</h3>
            {/* <div id="search-spells">
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
                {charSpells.length < 6 ? (
                    <h3>Add up to six spells.</h3>
                ) : (
                    <h3>Spells are full.</h3>
                )}
                <section id="mySpellsDisplay">
                    {charSpells.map((spell) => {
                        return (
                            <section key={spell.characters_spells_id}>
                                <Collapsible
                                    trigger={"+" + " " + spell.spell_name}
                                    triggerWhenOpen={
                                        "—" + " " + spell.spell_name
                                    }
                                    key={spell.url}
                                    transitionTime={200}
                                >
                                    <RemoveSpellButton
                                        characters_spells_id={
                                            spell.characters_spells_id
                                        }
                                    />
                                    <DetailsButton
                                        spell_index={spell.spell_index}
                                    />
                                </Collapsible>
                                <br />
                            </section>
                        );
                    })}
                </section>
            </div>
        </section>
    );
}
