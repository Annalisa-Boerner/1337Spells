import { createCharacterSpell } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddSpellButton({ charId, spell_index }) {
    // const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            createCharacterSpell(spell_index, charId);
            // navigate(0);
            // navigate("/myspellbook");
        } catch (error) {
            alert("There was an error adding this spell to your spellbook");
        }
    }

    return (
        <section id="addSpellContainer">
            <form onSubmit={handleSubmit}>
                <button type="submit" className="addSpellButton">
                    Add to Spellbook
                </button>
            </form>
        </section>
    );
}
