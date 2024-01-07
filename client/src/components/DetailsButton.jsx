import { useState } from "react";
import SpellDetails from "./SpellDetails";

export default function DetailsButton({ spell_index }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <section>
            <form onClick={handleClick}>
                <button className="details-button" key={spell_index}>
                    {!isOpen ? "Details" : "Close"}
                </button>
                <div>
                    {isOpen && (
                        <SpellDetails
                            key={spell_index}
                            spell_index={spell_index}
                        />
                    )}
                </div>
            </form>
        </section>
    );
}

// Note: this is all up a level in MyCantrips/Spells; not certain that this property can be grabbed off this object
// <DetailsButton
// spell_index={spell.spell_index}
// />
{
    /* <DetailsButton
spell_index={cantrip.cantrip_index}
/> */
}
