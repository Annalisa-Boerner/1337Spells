import { createCharacterSpell } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddSpellButton({ spell_index, charId, spell_name }) {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log("charId in add to spellbook button", charId);
            createCharacterSpell(spell_index, charId, spell_name);
            // navigate(0);
            navigate("/myspellbook");
        } catch (error) {
            alert("There was an error adding this spell to your spellbook");
        }
    }

    return (
        <section id="addSpellContainer">
            <form onSubmit={handleSubmit}>
                <button type="submit" className="addSpellButton">
                    Add
                </button>
            </form>
        </section>
    );
}
