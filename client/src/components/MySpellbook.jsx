import AllSpells from "./AllSpells";
import AllCantrips from "./AllCantrips";
import { fetchSingleCharacter } from "../helpers/characters";
import { useEffect, useState } from "react";
import SingleCharSpells from "./SingleCharSpells";
import SingleCharCantrips from "./SingleCharCantrips";

export default function MySpellbook({ token, charId, charName }) {
    // converts string to title case/sentence case for later display in rendering
    // function titleCase(str) {
    //     str = str.toLowerCase().split(" ");
    //     for (let i = 0; i < str.length; i++) {
    //         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    //     }
    //     return str.join(" ");
    // }

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
