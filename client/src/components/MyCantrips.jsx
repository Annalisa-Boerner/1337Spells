import { useState, useEffect } from "react";
import { fetchCharacterCantripsByCharacterId } from "../helpers/cantrips";
import Collapsible from "react-collapsible";
import DetailsButton from "./DetailsButton";
import RemoveCantripButton from "./RemoveCantripButton";

export default function MyCantrips({ charIdNum }) {
    // const [searchParam, setSearchParam] = useState("");
    const [charCantrips, setCharCantrips] = useState([]);

    //FETCH THE CHARACTER'S CANTRIPS
    useEffect(() => {
        async function getCharacterCantrips() {
            const charCantrips = await fetchCharacterCantripsByCharacterId(
                charIdNum
            );

            if (charCantrips) {
                setCharCantrips(charCantrips);
                return charCantrips;
            } else {
                console.error(
                    "there was an error fetching this character's cantrips"
                );
            }
        }
        getCharacterCantrips();
    }, [charIdNum]);

    console.log("cantrips in MyCantrips component", charCantrips);
    return (
        <section id="myCantrips">
            <h3 id="myCantripsTitle">My Cantrips</h3>
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
                {charCantrips.length < 3 ? (
                    <h3>Add up to three cantrips.</h3>
                ) : (
                    <h3>Cantrips are full.</h3>
                )}
                <section id="myCantripsDisplay">
                    {charCantrips.map((cantrip) => {
                        return (
                            <section key={cantrip.characters_cantrips_id}>
                                <Collapsible
                                    trigger={"+" + " " + cantrip.cantrip_name}
                                    triggerWhenOpen={
                                        "—" + " " + cantrip.cantrip_name
                                    }
                                    key={cantrip.url}
                                    transitionTime={200}
                                >
                                    <RemoveCantripButton
                                        characters_cantrips_id={
                                            cantrip.characters_cantrips_id
                                        }
                                    />
                                    <DetailsButton
                                        spell_index={cantrip.cantrip_index}
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
