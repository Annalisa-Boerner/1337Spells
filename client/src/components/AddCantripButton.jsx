import { useState } from "react";
import { createCharacter_cantrip } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddCantripButton({ charId }) {
    const [cantrip_id, setCantrip_id] = useState("");
    //get this from localStorage instead of state
    // const [char_id, setChar_id] = useState("");
    // const [cantrip_name, setCantrip_name] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await createCharacter_cantrip(cantrip_id, charId);
            console.log("create character cantrip charId", charId);
            navigate(0);
            navigate("/myspellbook");
        } catch (error) {
            alert("There was an error adding this cantrip to your spellbook");
        }
    }

    return (
        <section id="addCantrip-container">
            {/* <h3>Add A Cantrip to My Spellbook</h3> */}
            <form onSubmit={handleSubmit}>
                {/* <input
                    className="new-cantrip-form-bar"
                    value={cantrip_id}
                    type="text"
                    name="cantrip_id"
                    placeholder="Cantrip ID - Integer by All Cantrips Listing"
                    onChange={(event) => setCantrip_id(event.target.value)}
                /> */}
                {/* <br />

                <input
                    className="new-cantrip-form-bar"
                    value={charId}
                    type="text"
                    name="char_id"
                    placeholder="My Character ID"
                    onChange={(event) => setChar_id(event.target.value)}
                /> */}

                <br />

                {/* <input
                    className="new-cantrip-form-bar"
                    value={cantrip_name}
                    type="text"
                    name="cantrip_name"
                    placeholder="Cantrip Name"
                    onChange={(event) => setCantrip_name(event.target.value)}
                />
                <br />
                <br /> */}
                <button type="submit" className="add-cantrip-button">
                    Submit
                </button>
            </form>
        </section>
    );
}
