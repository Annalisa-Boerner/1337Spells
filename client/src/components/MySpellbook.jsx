import AllSpells from "./AllSpells";
import AllCantrips from "./AllCantrips";
import { useEffect, useState } from "react";
import MySpells from "./MySpells";
import MyCantrips from "./MyCantrips";

export default function MySpellbook({ token }) {
    const [charName, setCharName] = useState("");
    const [charIdNum, setCharIdNum] = useState(null);

    // converts string to title case/sentence case for later display in rendering
    function titleCase(str) {
        str = str.toLowerCase().split(" ");
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(" ");
    }

    //Grab single character info from localStorage so that props don't have to come all the way down from app to SingleChar components

    useEffect(() => {
        setCharIdNum(window.localStorage.getItem("charId"));
        setCharName(window.localStorage.getItem("charName"));
    }, []);

    return (
        <>
            {token ? (
                <section>
                    <h2>{titleCase(charName)}'s Spellbook</h2>
                    <div id="my-spellbook-content">
                        <section id="all-spells-container">
                            <AllSpells charIdNum={charIdNum} />
                        </section>
                        <div id="spellbook-spacer-1"></div>
                        <section id="spellbook-container">
                            <div id="my-spells">
                                {" "}
                                <MySpells charIdNum={charIdNum} />
                            </div>
                            <div id="my-cantrips">
                                {" "}
                                <MyCantrips charIdNum={charIdNum} />
                            </div>
                        </section>{" "}
                        <div id="spellbook-spacer-2"></div>
                        <section id="all-cantrips-container">
                            <AllCantrips charIdNum={charIdNum} />
                        </section>
                    </div>
                </section>
            ) : (
                <h2>Please log in using the link above.</h2>
            )}
        </>
    );
}
