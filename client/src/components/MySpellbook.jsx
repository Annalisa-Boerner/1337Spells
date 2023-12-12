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
                            <SingleCharSpells charId={charId} />
                            <AllSpells charId={charId} />
                        </div>
                        <div className="spacebetween"></div>
                        <div id="rightside">
                            <SingleCharCantrips charId={charId} />
                            <AllCantrips charId={charId} />
                        </div>
                    </div>
                </section>
            ) : (
                <h2>Please log in using the link above.</h2>
            )}
        </>
    );
}
