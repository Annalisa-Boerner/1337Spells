//navigation for the site
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navbar({ token }) {
    return (
        <div id="navbar-container">
            <Link to="/">
                <img src={logo} id="logo" /></Link>
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
