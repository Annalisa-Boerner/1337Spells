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
          console.log(username, password, name);
          const register = await registerCharacter(username, password, name);
          setToken(register.token);
          console.log("register in the Register handleSubmit ", register);
          setUsername("");
          setPassword("");
          setName("");
          nav("/myspellbook");
     };

     return (
          <section>
               <h1>Hi Register Here</h1>
               <form onSubmit={handleSubmit}>
                    <input
                         placeholder="Username"
                         value={username}
                         type="text"
                         onChange={(event) => setUsername(event.target.value)}
                    />
                    <br />

                    <input
                         placeholder="Password"
                         value={password}
                         type="password"
                         onChange={(event) => setPassword(event.target.value)}
                    />
                    <br />
                    <input
                         placeholder="Character Name"
                         value={name}
                         type="text"
                         onChange={(event) => setName(event.target.value)}
                    />
                    <br />
               </form>
          </section>
     );
}
