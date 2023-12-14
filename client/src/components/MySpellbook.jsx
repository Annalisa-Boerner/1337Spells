import AllSpells from "./AllSpells";
import AllCantrips from "./AllCantrips";
import { fetchSingleCharacter } from "../helpers/characters";
import { useEffect, useState } from "react";
import SingleCharSpells from "./SingleCharSpells";
import SingleCharCantrips from "./SingleCharCantrips";

export default function MySpellbook({ token, charId, charName }) {
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
            <h2>{titleCase(charName)}'s Spellbook</h2>
            {/* <AllSpells charId={charId} />
            <AllCantrips charId={charId} /> */}
            {token ? (
                <section id="spellbookContainer">
                    <div id="leftside">
                        {" "}
                        <SingleCharSpells charId={charId} />
                    </div>
                    <div id="rightside">
                        {" "}
                        <SingleCharCantrips charId={charId} />
                    </div>
                </section>
            ) : (
                <h2>Please log in using the link above.</h2>
            )}
        </>
    );
}
