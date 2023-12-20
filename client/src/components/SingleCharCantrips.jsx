import { useState, useEffect } from "react";
import {
    fetchAllCantrips,
    fetchCharacterCantripsByCharacterId,
} from "../helpers/cantrips";
import Collapsible from "react-collapsible";
import RemoveCantripButton from "./RemoveCantripButton";

export default function SingleCharCantrips({ charId }) {
    // const [searchParam, setSearchParam] = useState("");
    const [charCantrips, setCharCantrips] = useState([]);
    const [allCantrips, setAllCantrips] = useState([]);

    //FETCH THE CHARACTER'S CANTRIPS
    useEffect(() => {
        async function getCharacterCantrips() {
            const charCantrips = await fetchCharacterCantripsByCharacterId(
                charId
            );

            if (charCantrips) {
                setCharCantrips(charCantrips);
                // console.log("charCantrips in SingleCharCantrips", charSpells);
                return charCantrips;
            } else {
                console.error(
                    "there was an error fetching this character's cantrips"
                );
            }
        }
        getCharacterCantrips();
    }, []);

    //FETCH ALL CANTRIPS

    useEffect(() => {
        async function getAllCantrips() {
            const allCantrips = await fetchAllCantrips();

            if (allCantrips) {
                setAllCantrips(allCantrips);
                return allCantrips;
            } else {
                console.error("there was an error fetching all cantrips");
            }
        }
        getAllCantrips();
    }, []);

    //mapping through cantrips to push the ones that are in char cantrips into an array for later filtering

    const characterCantripIds = [];

    charCantrips.map((charCantrip) => {
        characterCantripIds.push(charCantrip.cantrip_id);
    });

    // console.log("all cantrips in singleCharCantrips", allCantrips);

    //pushing the ids from all cantrips into an array

    // const cantripIds = [];

    // allCantrips.map((cantrip) => {
    //     cantripIds.push(cantrip.cantrip_id);
    // });

    return (
        <section id="char-cantrips">
            <h3>My Cantrips</h3>
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
                {characterCantripIds.length < 3 ? (
                    <h3>Add up to three cantrips.</h3>
                ) : (
                    <h3>Cantrips are full.</h3>
                )}
                <section id="character-cantrips-display">
                    {allCantrips
                        .filter((cantrip) =>
                            characterCantripIds.includes(cantrip.cantrip_id)
                        )
                        .map((cantrip) => {
                            return (
                                <section key={cantrip.characters_cantrips_id}>
                                    <Collapsible
                                        trigger={"+" + " " + cantrip.name}
                                        triggerWhenOpen={
                                            "—" + " " + cantrip.name
                                        }
                                        key={cantrip.url}
                                        transitionTime={200}
                                    >
                                        <p>cantrip details here</p>
                                        <RemoveCantripButton
                                            cantrip_id={cantrip.cantrip_id}
                                            charId={charId}
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
