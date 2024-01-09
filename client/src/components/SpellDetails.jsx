import { useEffect, useState } from "react";
import { fetchSpellByIndex } from "../helpers/dnd5eApi";

export default function SpellDetails({ spell_index }) {
    const [spellDetails, setSpellDetails] = useState("");

    useEffect(() => {
        async function getSpellDetails() {
            const detailObject = await fetchSpellByIndex(spell_index);
            if (detailObject) {
                setSpellDetails(detailObject.desc);
            } else {
                console.error("there was an error fetching spell details");
            }
        }
        getSpellDetails();
    }, [spell_index]);

    return <p>{spellDetails}</p>;
}
