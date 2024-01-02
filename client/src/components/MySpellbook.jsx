import AllSpells from "./AllSpells";
import AllCantrips from "./AllCantrips";
import { fetchSingleCharacter } from "../helpers/characters";
import { useEffect, useState } from "react";
import SingleCharSpells from "./SingleCharSpells";
import SingleCharCantrips from "./SingleCharCantrips";

export default function MySpellbook({ token, charId }) {
    const [charName, setCharName] = useState("");
    // converts string to title case/sentence case for later display in rendering
    // function titleCase(str) {
    //     str = str.toLowerCase().split(" ");
    //     for (let i = 0; i < str.length; i++) {
    //         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    //     }
    //     return str.join(" ");
    // }

    //write a fetch to grab character name and ID from here - refer to studio drink profile

    useEffect(() => {
        async function getSingleCharacterProfile() {
            const response = await fetchSingleCharacter(charId);

            try {
                if (response) {
                    setCharName(response.charName);
                    console.log("response", response);
                }
            } catch (error) {
                console.error("can't get character info", error);
            }
        }
        getSingleCharacterProfile;
    }, [charId]);

    console.log("charName", charName);

    return (
        <>
            <h2>{charName}'s Spellbook</h2>
            {token ? (
                <div id="MySpellbookContent">
                    <section id="allSpellsContainer">
                        <AllSpells charId={charId} />
                    </section>
                    <div className="spellbookSpacer"></div>
                    <section id="spellbookContainer">
                        <div id="mySpells">
                            {" "}
                            <SingleCharSpells charId={charId} />
                        </div>
                        <div id="myCantrips">
                            {" "}
                            <SingleCharCantrips charId={charId} />
                        </div>
                    </section>{" "}
                    <div className="spellbookSpacer"></div>
                    <section id="allCantripsContainer">
                        <AllCantrips charId={charId} />
                    </section>
                </div>
            ) : (
                <h2>Please log in using the link above.</h2>
            )}
        </>
    );
}
