//navigation for the site
import { Link } from "react-router-dom";

export default function Navbar({ token }) {
    return (
        <div id="navbar-container">
            <Link to="/">Home</Link>
            <Link to="/myspellbook">My Spellbook</Link>
            <a href="https://shorturl.at/bjquF" target="_blank">
                Browse Spells (External)
            </a>
            {token ? (
                <Link to="/logout">Logout</Link>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );
}
