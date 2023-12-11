import { useState, useEffect } from "react";
import {
    deleteCharacterCantrip,
    fetchAllCharactersCantrips,
} from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

//Get all spellbooks and their cantrips

export default function AllSpellbooksCantrips() {
    const [allCharactersCantrips, setAllCharactersCantrips] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function getAllCharactersCantrips() {
            const spellbooksCantrips = await fetchAllCharactersCantrips();
            if (spellbooksCantrips) {
                setAllCharactersCantrips(spellbooksCantrips);
                return spellbooksCantrips;
            } else {
                console.error(
                    "there was an error fetching all spellbooks' cantrip content"
                );
            }
        }
        getAllCharactersCantrips();
    }, []);

    //Delete a cantrip from a spellbook

    async function handleDelete(event) {
        event.preventDefault();
        try {
            await deleteCharacterCantrip(event.target.id);
            navigate(0);
        } catch (error) {
            console.error(error);
        }
    }

    //Filter spellbooks to only show your own cantrips

    const spellbooksToDisplay2 = searchParam
        ? allCharactersCantrips.filter((spellbook2) =>
              spellbook2.spellbook_id.toString().includes(searchParam)
          )
        : allCharactersCantrips;

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
            {spellbooksToDisplay2.map((characterCantrips) => {
                return (
                    <div
                        className="flex"
                        key={characterCantrips.characters_cantrips_id}
                    >
                        <p>
                            Spellbook ID: {characterCantrips.spellbook_id}
                            <br />
                            Cantrip: {characterCantrips.cantrip_name}
                            <br />
                            <button
                                onClick={handleDelete}
                                id={characterCantrips.spellbooks_cantrips_id}
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
