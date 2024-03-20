import { useState } from "react";
import { login } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken, setCharId, setCharName }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const nav = useNavigate();

    //Show password function
    // Show password function
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const register = await login(username, password, name);
            setToken(register.token);
            setCharId(register.character_id);
            setCharName(register.name);

            localStorage.setItem("token", register.token);
            localStorage.setItem("charId", register.character.character_id);
            localStorage.setItem("charName", register.character.name);
            setUsername("");
            setPassword("");
            setName("");

            if (login) {
                nav("/myspellbook");
            }
        } catch (error) {
            console.error("error logging in", error);
        }
    };

    return (
        <div id="login-container">
            <h2>Login</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    className="register-bar"
                    id="username"
                    autoFocus
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    className="register-bar"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <label style={{ fontSize: "1rem" }}>
                    Show Password
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleCheckboxChange}
                    />
                </label>
                < br />
                <input
                    className="register-bar"
                    placeholder="Character Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
