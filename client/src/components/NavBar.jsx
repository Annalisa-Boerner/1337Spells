//navigation for the site
import { Link } from "react-router-dom";

export default function Navbar({ token }) {
    return (
        <div id="navbar-container">
            {/* <Link to="/myspellbook">My Spellbook</Link> */}
            {/* <a href="https://shorturl.at/bjquF" target="_blank">
                Browse Spells (External)
            </a> */}
            {token ? (
                <Link to="/logout" className="login-logout-link">
                    Logout
                </Link>
            ) : (
                <Link to="/login" className="login-logout-link">
                    Login
                </Link>
            )}
        </div>
    );
}
