import { useState } from "react";
import { createSpellbook_cantrip } from "../helpers/junction_spellbooks";
import { useNavigate } from "react-router-dom";

export default function AddToSpellbooksCantrips() {
     const [cantrip_id, setCantrip_id] = useState("");
     const [spellbook_id, setSpellbook_id] = useState("");
     const [cantrip_name, setCantrip_name] = useState("");
     const navigate = useNavigate();

     async function handleSubmit(event) {
          event.preventDefault();
          try {
               await createSpellbook_cantrip(
                    cantrip_id,
                    spellbook_id,
                    cantrip_name
               );
               navigate(0);
               navigate("/myspellbook");
          } catch (error) {
               alert(
                    "There was an error adding this cantrip to your spellbook"
               );
          }
     }

     return (
          <section id="addCantrip-container">
               <h3>Add A Cantrip to My Spellbook</h3>
               <form onSubmit={handleSubmit}>
                    <input
                         value={cantrip_id}
                         type="text"
                         name="cantrip_id"
                         placeholder="Cantrip ID - Integer by All Cantrips Listing"
                         onChange={(event) => setCantrip_id(event.target.value)}
                    />
                    <br />

                    <input
                         value={spellbook_id}
                         type="text"
                         name="spellbook_id"
                         placeholder="Spellbook ID - Your Book"
                         onChange={(event) =>
                              setSpellbook_id(event.target.value)
                         }
                    />

                    <br />

                    <input
                         value={cantrip_name}
                         type="text"
                         name="cantrip_name"
                         placeholder="Cantrip Name"
                         onChange={(event) =>
                              setCantrip_name(event.target.value)
                         }
                    />
                    <br />
                    <br />
                    <button type="submit" className="add-cantrip-button">
                         Submit
                    </button>
               </form>
          </section>
     );
}
