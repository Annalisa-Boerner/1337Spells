import { useState } from "react";
import { createCharacter_spell } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddSpellButton({ charId }) {
    const [spell_id, setSpell_id] = useState("");
    // const [char_id, setChar_id] = useState("");
    // const [spell_name, setSpell_name] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log("entering handleSubmit");
            console.log("Button spell_id ", spell_id);
            console.log("Button charId", charId);
            createCharacter_spell(spell_id, charId);
            // navigate(0);
            // navigate("/myspellbook");
        } catch (error) {
            alert("There was an error adding this spell to your spellbook");
        }
    }

    return (
        <section id="addSpell-container">
            {/* <h3>Add A Spell to My Spellbook</h3> */}
            <form onSubmit={handleSubmit}>
                {/* <input
                    className="new-spell-form-bar"
                    value={spell_id}
                    type="text"
                    name="spell_id"
                    placeholder="Spell ID - Integer by All Spells Listing"
                    onChange={(event) => setSpell_id(event.target.value)}
                />
                <br /> */}

                {/* <input
                    className="new-spell-form-bar"
                    value={char_id}
                    type="text"
                    name="spellbook_id"
                    placeholder="Character ID"
                    onChange={(event) => setChar_id(event.target.value)}
                />

                <br /> */}

                {/* <input
                    className="new-spell-form-bar"
                    value={spell_name}
                    type="text"
                    name="spell_name"
                    placeholder="Spell Name"
                    onChange={(event) => setSpell_name(event.target.value)}
                />
                <br />
                <br /> */}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
