//This component handles removing a spell from the spellbook

import { deleteCharacterCantrip } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function RemoveCantripButton({ characters_cantrips_id }) {
    const nav = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log(
                "try catch in remove button and then id",
                characters_cantrips_id
            );
            await deleteCharacterCantrip(characters_cantrips_id);
            nav(0);
        } catch (error) {
            console.error("there was an error removing this cantrip", error);
        }
    }
    return (
        <div>
            <button onClick={handleSubmit} id="remove-cantrip-button">
                Remove
            </button>
        </div>
    );
}
