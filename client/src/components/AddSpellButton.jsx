import { useState } from "react";
import { createCharacter_spell } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddSpellButton({ charId, spell_id }) {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            createCharacter_spell(spell_id, charId);
            navigate(0);
            navigate("/myspellbook");
        } catch (error) {
            alert("There was an error adding this spell to your spellbook");
        }
    }

    return (
        <section id="add-spell-button">
            <form onSubmit={handleSubmit}>
                <button type="submit">Add to Spellbook</button>
            </form>
        </section>
    );
}
