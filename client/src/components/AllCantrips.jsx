import { useState, useEffect } from "react";
import { fetchAllApiCantrips } from "../helpers/dnd5eApi";
import Collapsible from "react-collapsible";
import AddCantripButton from "./AddCantripButton";

export default function AllCantrips({ charId }) {
    const [allCantrips, setAllCantrips] = useState([]);
    const [searchParam, setSearchParam] = useState([]);

    useEffect(() => {
        async function getAllCantrips() {
            const cantrips = await fetchAllApiCantrips();

            //    console.log(apiResponse);
            if (cantrips) {
                setAllCantrips(cantrips.results);

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

    console.log("allCantrips in AllCantrips line 31", allCantrips);
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
            <div id="allCantripNames">
                {cantripsToDisplay.map((cantrip) => {
                    return (
                        <>
                            <Collapsible
                                trigger={"+" + " " + cantrip.name}
                                triggerWhenOpen={"—" + " " + cantrip.name}
                                key={cantrip.url}
                                transitionTime={200}
                            >
                                <p>cantrip details here</p>
                                <AddCantripButton
                                    cantrip_id={cantrip.spell_id}
                                    charId={charId}
                                />
                            </Collapsible>
                            <br />
                        </>
                    );
                })}
            </div>
        </section>
    );
}
