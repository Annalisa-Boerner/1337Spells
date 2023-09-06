import "./App.css";

import MainSection from "./components/mainSection";
import Navbar from "./components/navBar";

function App() {
     return (
          <>
               <div id="app-container">
                    <Navbar />
                    <MainSection />
               </div>
          </>
     );
}

export default App;
