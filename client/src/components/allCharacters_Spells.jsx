import { useState, useEffect } from "react";
import {
    deleteCharacter_Spell,
    fetchAllCharacters_Spells,
} from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

//get all the spellbooks with their spells

export default function AllCharacters_Spells() {
    const [allCharacters_Spells, setAllCharacters_Spells] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function getAllCharacters_Spells() {
            const characters_spells = await fetchAllCharacters_Spells();
            if (characters_spells) {
                setAllCharacters_Spells(characters_spells);
                return characters_spells;
            } else {
                console.error(
                    "there was an error fetching all spellbooks' spell content"
                );
            }
        }
        getAllCharacters_Spells();
    }, []);

    //Delete a spell from a spellbook

    async function handleDelete(event) {
        event.preventDefault();
        try {
            await deleteCharacter_Spell(event.target.id);
            navigate(0);
        } catch (error) {
            console.error(error);
        }
    }

    //Filter spellbooks to only show your own spells

    const charactersToDisplay = searchParam
        ? allCharacters_Spells.filter((character) =>
              character.spellbook_id.toString().includes(searchParam)
          )
        : allCharacters_Spells;

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

            {charactersToDisplay.map((character_spells) => {
                return (
                    <div key={character_spells.characters_spells_id}>
                        <p>
                            character ID: {character_spells.character_id}
                            <br />
                            Spell: {character_spells.spell_name}
                            <br />
                            <button
                                className="remove-spell-button"
                                onClick={handleDelete}
                                id={character_spells.characters_spells_id}
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
