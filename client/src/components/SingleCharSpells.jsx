import { useState, useEffect } from "react";
import {
    fetchAllSpells,
    fetchCharacterSpellsByCharacterId,
} from "../helpers/spells";
import RemoveSpellButton from "./RemoveSpellButton";

export default function SingleCharSpells({ charId }) {
    // const [searchParam, setSearchParam] = useState("");
    const [charSpells, setCharSpells] = useState([]);
    const [allSpells, setAllSpells] = useState([]);

    //FETCH THE CHARACTER'S SPELLS
    useEffect(() => {
        async function getCharacterSpells() {
            const charSpells = await fetchCharacterSpellsByCharacterId(charId);

            if (charSpells) {
                setCharSpells(charSpells);
                // console.log("charSpells in SingleCharSpells", charSpells);
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

    const characterSpellIds = [];

    charSpells.map((charSpell) => {
        characterSpellIds.push(charSpell.spell_id);
    });

    // console.log("character spell ids", characterSpellIds);
    //pushing the ids from the spells into an array

    const spellIds = [];

    allSpells.map((allSpell) => {
        spellIds.push(allSpell.spell_id);
    });

    // console.log("spell ids", spellIds);
    return (
        <section id="char-spells">
            <h3>My Spells</h3>
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
                <p>placeholder</p>
                <section id="character-spells-display">
                    {allSpells
                        .filter((spell) =>
                            characterSpellIds.includes(spell.spell_id)
                        )
                        .map((spell) => {
                            return (
                                <section key={spell.characters_spells_id}>
                                    <div>
                                        <p>{spell.name}</p>
                                    </div>
                                    <div>
                                        <RemoveSpellButton
                                            spell_id={spell.spell_id}
                                        />
                                    </div>
                                </section>
                            );
                        })}
                </section>
            </div>
        </section>
    );
}
