import { useState } from "react";
import { registerCharacter } from "../fetching";
import { useNavigate } from "react-router-dom";
import { fetchAllCharacters } from "../helpers/characters";

export default function Register({ token, setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    //Putting display message conditions on state
    const [characterExists, setCharacterExists] = useState(false);
    const [nameTooShort, setNameTooShort] = useState(false);
    const [passwordTooShort, setPasswordTooShort] = useState(false);

    const nav = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Fetch all characters to see if character's username already exsits
        //reset the messages after they've been cleared; place message above
        try {
            const characterResponse = await fetchAllCharacters();
            if (password.length < 8) {
                setPasswordTooShort(true);
            } else if (
                characterResponse.filter(
                    (character) => character.username === username
                ).length > 0
            ) {
                setCharacterExists(true);
            } else if (username.length < 4) {
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
                    console.log("register object", register)
                    localStorage.setItem("token", register.token);
                    localStorage.setItem("charId", register.character.character_id);
                    localStorage.setItem("charName", register.character.name);
                    // nav("/myspellbook");
                } else {
                    alert("There was an error during registration.");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    // Show password function
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section>
            <br />
            <br />

            <h2 id="register-here-text">Register Here</h2>
            <form onSubmit={handleSubmit}>
                {passwordTooShort && (
                    <h3>Passwords must contain a minimum of 8 characters.</h3>
                )}
                {characterExists && (
                    <h3>
                        Username already exists. Please choose another username.
                    </h3>
                )}
                {nameTooShort && (
                    <h3>Usernames must contain a minimum of 4 characters.</h3>
                )}
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
                    type={showPassword ? "text" : "password"}
                    onChange={(event) => setPassword(event.target.value)}
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
