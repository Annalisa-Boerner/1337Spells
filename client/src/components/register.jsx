import { useState } from "react";
import { registerCharacter } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function Register({ token, setToken }) {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [name, setName] = useState("");
     const nav = useNavigate();

     const handleSubmit = async (event) => {
          event.preventDefault();
          console.log("handle submit variables", username, password, name);
          const register = await registerCharacter(username, password, name);
          console.log("register in the Register handleSubmit ", register);
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
