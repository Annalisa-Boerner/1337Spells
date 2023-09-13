import React from "react";
import MySpellbook from "../components/mySpellbook";
import { BrowserRouter } from "react-router-dom";

describe("<MySpellbook />", () => {
     it("renders", () => {
          // see: https://on.cypress.io/mounting-react
          cy.mount(
               <BrowserRouter>
                    <MySpellbook />
               </BrowserRouter>
          );
     });

     it("checks that there is an h2 with text My Spellbook", () => {
          // see: https://on.cypress.io/mounting-react
          cy.mount(
               <BrowserRouter>
                    <MySpellbook />
               </BrowserRouter>
          );

          cy.get("h2").contains("My Spellbook");
     });
});
