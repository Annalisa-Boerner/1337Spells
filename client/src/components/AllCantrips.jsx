import { useState, useEffect } from "react";
import { fetchAllCantrips } from "../helpers/cantrips";
import AddCantripButton from "./AddCantripButton";

export default function AllCantrips({ charId }) {
    const [allCantrips, setAllCantrips] = useState([]);
    const [searchParam, setSearchParam] = useState([]);

    useEffect(() => {
        async function getAllCantrips() {
            const cantrips = await fetchAllCantrips();

            //    console.log(apiResponse);
            if (cantrips) {
                setAllCantrips(cantrips);

                return cantrips;
            } else {
                console.error("there was an error fetching all cantrips");
            }
        }
        getAllCantrips();
    }, []);

    const cantripsToDisplay = searchParam
        ? allCantrips.filter((cantrip) =>
              cantrip.name.toLowerCase().includes(searchParam)
          )
        : allCantrips;

    return (
        <section id="all-cantrips" className="flex-column">
            <h3>All Cantrips</h3>
            <label id="search-cantrips">
                {""}
                <input
                    id="search-cantrips-bar"
                    type="text"
                    placeholder="Search cantrips by name"
                    onChange={(event) =>
                        setSearchParam(event.target.value.toLowerCase())
                    }
                />
            </label>

            {cantripsToDisplay.map((cantrip) => {
                return (
                    <div key={cantrip.cantrip_id}>
                        <p>{cantrip.name}</p>
                        <AddCantripButton
                            cantrip_id={cantrip.cantrip_id}
                            charId={charId}
                        />
                    </div>
                );
            })}
        </section>
    );
}
