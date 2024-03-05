import { useState, useEffect } from "react";
import { fetchAllApiCantrips } from "../helpers/dnd5eApi";
import Collapsible from "react-collapsible";
import DetailsButton from "./DetailsButton";
import AddCantripButton from "./AddCantripButton";

export default function AllCantrips({ charIdNum }) {
    const [allCantrips, setAllCantrips] = useState([]);
    const [searchParam, setSearchParam] = useState([]);

    useEffect(() => {
        async function getAllCantrips() {
            const cantrips = await fetchAllApiCantrips();

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
            <br />
            <div id="all-cantrip-names">
                {cantripsToDisplay.map((cantrip) => {
                    return (
                        <>
                            <Collapsible
                                trigger={"+" + " " + cantrip.name}
                                triggerWhenOpen={"—" + " " + cantrip.name}
                                key={cantrip.url}
                                transitionTime={200}
                                id="#all-cantrips-collapsible"
                            >
                                <AddCantripButton
                                    cantrip_index={cantrip.index}
                                    charId={charIdNum}
                                    cantrip_name={cantrip.name}
                                />
                                <DetailsButton spell_index={cantrip.index} />
                            </Collapsible>
                            <br />
                        </>
                    );
                })}
            </div>
        </section>
    );
}
