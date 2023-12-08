//This component handles removing a spell from the spellbook

import { deleteCharacter_Spell } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function RemoveSpellButton({ spell_id }) {
    const nav = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await deleteCharacter_Spell(spell_id);
            // nav(0);
        } catch (error) {
            console.error("there was an error removing this spell", error);
        }
    }
    return (
        <div>
            <button onClick={handleSubmit} id="remove-spell-button">
                Remove
            </button>
        </div>
    );
}
