export default function DetailsButton() {
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            //something with dnd5eapi
        } catch (error) {
            alert(
                "There was an error fetching this spell or cantrip's details"
            );
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="detailsButton">
                    Details
                </button>
            </form>
        </section>
    );
}
