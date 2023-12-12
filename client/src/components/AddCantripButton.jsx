import { createCharacterCantrip } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddCantripButton({ charId, cantrip_id }) {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await createCharacterCantrip(cantrip_id, charId);
            console.log("create character cantrip charId", charId);
            navigate(0);
            navigate("/myspellbook");
        } catch (error) {
            alert("There was an error adding this cantrip to your spellbook");
        }
    }

    return (
        <section id="addCantrip-container">
            <form onSubmit={handleSubmit}>
                <button type="submit" className="add-cantrip-button">
                    Add to Spellbook
                </button>
            </form>
        </section>
    );
}
