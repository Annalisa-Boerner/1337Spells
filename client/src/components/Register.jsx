import { useState } from "react";
import { registerCharacter } from "../fetching";
import { useNavigate } from "react-router-dom";
import { fetchAllCharacters } from "../helpers/characters";

export default function Register({ token, setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [successMessage, setSuccessmessage] = useState(null);
    const [error, setError] = useState(null);

    //Putting display message conditions on state
    const [characterExists, setCharacterExists] = useState(false);
    const [nameTooShort, setNameTooShort] = useState(false);
    const [passwordTooShort, setPasswordTooShort] = useState(false);

    const nav = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Fetch all characters to see if character's username already exsits

        try {
            const characterResponse = await fetchAllCharacters();
            if (password.length <= 8) {
                setPasswordTooShort(true);
            } else if (
                characterResponse.filter(
                    (character) => character.username === username
                ).length > 0
            ) {
                setCharacterExists(true);
            } else if (username.length <= 4) {
                setNameTooShort(true);
            } else {
                console.log(
                    "handle submit variables",
                    username,
                    password,
                    name
                );
                const register = await registerCharacter(
                    username,
                    password,
                    name
                );
                console.log("register in the Register handleSubmit ", register);
                setToken(register.token);
                setUsername("");
                setPassword("");
                setName("");
                if (register) {
                    nav("/login");
                } else {
                    alert("registration probz");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section>
            <br />
            <br />

            <h2 id="register-here-text">Register Here</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="register-bar"
                    placeholder="Username"
                    value={username}
                    type="text"
                    onChange={(event) => setUsername(event.target.value)}
                />
                <br />

                <input
                    className="register-bar"
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br />
                <input
                    className="register-bar"
                    placeholder="Character Name"
                    value={name}
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                />
                <br />
                <br />
                <button id="register-button" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}
