import Register from "./register";

export default function HomePage({ token, setToken }) {
     return (
          <div>
               <h2>
                    Welcome, Level 1 Wizard! Please log in to 1337 Spells and
                    populate your spellbook via the links above, or register
                    below.
                    <Register token={token} setToken={setToken} />
               </h2>
          </div>
     );
}