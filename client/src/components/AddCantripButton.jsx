import { createCharacterCantrip } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddCantripButton({
    cantrip_index,
    charId,
    cantrip_name,
}) {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await createCharacterCantrip(cantrip_index, charId, cantrip_name);
            navigate(0);
            navigate("/myspellbook");
        } catch (error) {
            alert("There was an error adding this cantrip to your spellbook");
            console.log(error);
        }
    }

    return (
        <section id="addCantripContainer">
            <form onSubmit={handleSubmit}>
                <button type="submit" className="addCantripButton">
                    Add
                </button>
            </form>
        </section>
    );
}
