import { useState, useEffect } from "react";
import {
    fetchAllSpells,
    fetchCharacterSpellsByCharacterId,
} from "../helpers/spells";
import Collapsible from "react-collapsible";
import DetailsButton from "./DetailsButton";
import RemoveSpellButton from "./RemoveSpellButton";

export default function SingleCharSpells({ charId }) {
    const [charSpells, setCharSpells] = useState([]);
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
                console.error(
                    "there was an error fetching this character's spells"
                );
            }
        }
        getCharacterSpells();
    }, []);

    //FETCH ALL SPELLS

    useEffect(() => {
        async function getAllSpells() {
            const allSpells = await fetchAllSpells();

            if (allSpells) {
                setAllSpells(allSpells);
                // console.log("allSpells in SingleCharSpells", allSpells);
                return allSpells;
            } else {
                console.error("there was an error fetching all spells");
            }
        }
        getAllSpells();
    }, []);

    //mapping through spells to match with the ones that are in char spells

    const characterSpellIndices = [];

    charSpells.map((charSpell) => {
        characterSpellIndices.push(charSpell.spell_index);
    });

    //pushing the ids from the spells into an array

    const spellIndices = [];

    allSpells.map((allSpell) => {
        spellIndices.push(allSpell.spell_index);
    });

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
                {characterSpellIndices.length < 6 ? (
                    <h3>Add up to six spells.</h3>
                ) : (
                    <h3>Spells are full.</h3>
                )}
                <section id="mySpellsDisplay">
                    {allSpells
                        .filter((spell) =>
                            characterSpellIndices.includes(spell.spell_index)
                        )
                        .map((spell) => {
                            return (
                                <section key={spell.characters_spells_id}>
                                    <Collapsible
                                        trigger={"+" + " " + spell.spell_index}
                                        triggerWhenOpen={
                                            "—" + " " + spell.spell_index
                                        }
                                        key={spell.url}
                                        transitionTime={200}
                                    >
                                        <RemoveSpellButton
                                            spell_id={spell.spell_id}
                                            charId={charId}
                                        />
                                        <DetailsButton />
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
