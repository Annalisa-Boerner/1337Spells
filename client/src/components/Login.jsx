import { useState } from "react";
import { login } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken, setCharId, setCharName }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const nav = useNavigate();

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
                    id="username"
                    autoFocus
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
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
