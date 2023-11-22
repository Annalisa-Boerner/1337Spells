import AllCharacters_Cantrips from "./allCharacters_Cantrips";
import AllCharacters_Spells from "./allCharacters_Spells";
import AllSpells from "./allSpells";
import AllCantrips from "./allCantrips";
import AddToCharactersSpells from "./addSpells";
import AddToCharactersCantrips from "./addCantrips";
import { fetchSingleCharacter } from "../helpers/characters";
import { useEffect, useState } from "react";
import CharSpells from "./charSpells";

export default function MySpellbook({ token, charId }) {
    const [charName, setCharName] = useState("");

    //grab character info (get character object by character id)
    useEffect(() => {
        async function getCharacterProfile() {
            const response = await fetchSingleCharacter(charId);

            try {
                if (response) {
                    setCharName(response.name);
                }
            } catch (error) {
                console.error("can't get character info", error);
            }
            console.log("response.name in line 25", response.name);
        }
        getCharacterProfile();
    }, [charId]);

    console.log("response in mySpellbook line 29", charName);

    // converts string to title case/sentence case for later display in rendering
    function titleCase(str) {
        str = str.toLowerCase().split(" ");
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(" ");
    }

    return (
        <>
            {token ? (
                <section>
                    <h2>{titleCase(charName)}'s Spellbook</h2>
                    <div className="flex-titles">
                        <h4>My Spells (Limit 6)</h4>
                        <div className="space-between"></div>
                        <h4>My Cantrips (Limit 3)</h4>
                    </div>
                    <br />
                    <div id="spellbookContainer">
                        <div id="leftside">
                            {/* <AllCharacters_Spells /> */}
                            <CharSpells charId={charId} />
                            <AllSpells />
                            <AddToCharactersSpells charId={charId} />
                        </div>
                        <div className="spacebetween"></div>
                        <div id="rightside">
                            <AllCharacters_Cantrips />
                            <AllCantrips />
                            <AddToCharactersCantrips charId={charId} />
                        </div>
                    </div>
                </section>
            ) : (
                <h2>Please log in using the link above.</h2>
            )}
        </>
    );
}
