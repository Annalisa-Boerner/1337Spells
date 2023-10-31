import { useState } from "react";
import { login } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken, token, setUserId, userId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const nav = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("handle submit variables", username, password, name);
        const register = await login(username, password, name);
        console.log("register in the Login handleSubmit ", register);
        setToken(register.token);

        setUsername("");
        setPassword("");
        setName("");
        if (register) {
            nav("/myspellbook");
        } else {
            alert("registration probz");
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
