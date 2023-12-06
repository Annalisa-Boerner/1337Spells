import { useState, useEffect } from "react";
import {
    deleteCharacter_Cantrip,
    fetchAllCharacters_Cantrips,
} from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

//Get all spellbooks and their cantrips

export default function AllSpellbooks_Cantrips() {
    const [allCharacters_Cantrips, setAllCharacters_Cantrips] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function getAllCharacters_Cantrips() {
            const spellbooks_cantrips = await fetchAllCharacters_Cantrips();
            if (spellbooks_cantrips) {
                setAllCharacters_Cantrips(spellbooks_cantrips);
                return spellbooks_cantrips;
            } else {
                console.error(
                    "there was an error fetching all spellbooks' cantrip content"
                );
            }
        }
        getAllCharacters_Cantrips();
    }, []);

    //Delete a cantrip from a spellbook

    async function handleDelete(event) {
        event.preventDefault();
        try {
            await deleteCharacter_Cantrip(event.target.id);
            navigate(0);
        } catch (error) {
            console.error(error);
        }
    }

    //Filter spellbooks to only show your own cantrips

    const spellbooksToDisplay2 = searchParam
        ? allCharacters_Cantrips.filter((spellbook2) =>
              spellbook2.spellbook_id.toString().includes(searchParam)
          )
        : allCharacters_Cantrips;

    //Render the filter bar and spellbooks/cantrips
    return (
        <section id="cantrip-side" className="flex-column">
            <label>
                <h3>Spellbook ID:{""}</h3>
                <br />
                <input
                    id="search-spellbooks-cantrips-bar"
                    type="text"
                    placeholder="Search spellbooks by number"
                    onChange={(event) => setSearchParam(event.target.value)}
                />
            </label>
            {spellbooksToDisplay2.map((character_cantrips) => {
                return (
                    <div
                        className="flex"
                        key={character_cantrips.characters_cantrips_id}
                    >
                        <p>
                            Spellbook ID: {character_cantrips.spellbook_id}
                            <br />
                            Cantrip: {character_cantrips.cantrip_name}
                            <br />
                            <button
                                onClick={handleDelete}
                                id={character_cantrips.spellbooks_cantrips_id}
                            >
                                Remove Cantrip
                            </button>
                            <br />
                        </p>
                    </div>
                );
            })}
        </section>
    );
}
