import AllSpells from "./AllSpells";
import AllCantrips from "./AllCantrips";
import { fetchSingleCharacter } from "../helpers/characters";
import { useEffect, useState } from "react";
import SingleCharSpells from "./SingleCharSpells";
import SingleCharCantrips from "./SingleCharCantrips";

export default function MySpellbook({ token }) {
    const [charName, setCharName] = useState("");
    const [charIdNum, setCharIdNum] = useState(null);
    // const [charId, setCharId] = useState(null);
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
        setCharIdNum(window.localStorage.getItem("charId"));
        setCharName(window.localStorage.getItem("charName"));
    }, []);

    useEffect(() => {
        console.log("charId in GSCP ue before async function", charIdNum);
        async function getSingleCharacterProfile() {
            try {
                const response = await fetchSingleCharacter(charIdNum);
                console.log("response in GSCP ue", response);
                if (response) {
                    setCharName(response.charName);
                    console.log("response", response);
                }
            } catch (error) {
                console.error("can't get character info", error);
            }
        }
        getSingleCharacterProfile();
    }, [charIdNum]);

    // console.log("charId before the ue, aka via props", charIdNum);
    // console.log("charName", charName);

    return (
        <>
            <h2>{charName}'s Spellbook</h2>
            {token ? (
                <div id="MySpellbookContent">
                    <section id="allSpellsContainer">
                        <AllSpells charIdNum={charIdNum} />
                    </section>
                    <div className="spellbookSpacer"></div>
                    <section id="spellbookContainer">
                        <div id="mySpells">
                            {" "}
                            <SingleCharSpells charIdNum={charIdNum} />
                        </div>
                        <div id="myCantrips">
                            {" "}
                            <SingleCharCantrips charIdNum={charIdNum} />
                        </div>
                    </section>{" "}
                    <div className="spellbookSpacer"></div>
                    <section id="allCantripsContainer">
                        <AllCantrips charIdNum={charIdNum} />
                    </section>
                </div>
            ) : (
                <h2>Please log in using the link above.</h2>
            )}
        </>
    );
}
