import { useState, useEffect } from "react";
import {
    deleteCharacterSpell,
    fetchAllCharactersSpells,
} from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

//get all the spellbooks with their spells

export default function AllCharactersSpells() {
    const [allCharactersSpells, setAllCharactersSpells] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function getAllCharactersSpells() {
            const charactersSpells = await fetchAllCharactersSpells();
            if (charactersSpells) {
                setAllCharactersSpells(charactersSpells);
                return charactersSpells;
            } else {
                console.error(
                    "there was an error fetching all spellbooks' spell content"
                );
            }
        }
        getAllCharactersSpells();
    }, []);

    //Delete a spell from a spellbook

    async function handleDelete(event) {
        event.preventDefault();
        try {
            await deleteCharacterSpell(event.target.id);
            navigate(0);
        } catch (error) {
            console.error(error);
        }
    }

    //Filter spellbooks to only show your own spells

    const charactersToDisplay = searchParam
        ? allCharactersSpells.filter((character) =>
              character.spellbook_id.toString().includes(searchParam)
          )
        : allCharactersSpells;

    //Render the filter bar and spellbooks/spells
    return (
        <section id="spell-side" className="flex-column">
            <label>
                <h3>Spellbook ID:{""}</h3>
                <br />
                <input
                    id="search-spellbooks-spells-bar"
                    type="text"
                    placeholder="Search spellbooks by number"
                    onChange={(event) => setSearchParam(event.target.value)}
                />
            </label>

            {charactersToDisplay.map((characterSpells) => {
                return (
                    <div key={characterSpells.characters_spells_id}>
                        <p>
                            character ID: {characterSpells.character_id}
                            <br />
                            Spell: {characterSpells.spell_name}
                            <br />
                            <button
                                className="remove-spell-button"
                                onClick={handleDelete}
                                id={characterSpells.characters_spells_id}
                            >
                                Remove Spell
                            </button>
                            <br />
                            <br />
                        </p>
                    </div>
                );
            })}
        </section>
    );
}
