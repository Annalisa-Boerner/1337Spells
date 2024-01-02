//This component handles removing a spell from the spellbook

import { deleteCharacterSpell } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function RemoveSpellButton({ characters_spells_id }) {
    const nav = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log(
                "spell index in line 11 of remove button",
                characters_spells_id
            );
            await deleteCharacterSpell(characters_spells_id);
            nav(0);
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
