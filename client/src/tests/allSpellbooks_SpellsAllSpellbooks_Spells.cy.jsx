import React from "react";
import AllSpellbooks_Spells from "../components/allSpellbooks_Spells";
import { BrowserRouter } from "react-router-dom";

describe("<AllSpellbooks_Spells />", () => {
     it("renders", () => {
          // see: https://on.cypress.io/mounting-react
          cy.mount(
               <BrowserRouter>
                    <AllSpellbooks_Spells />
               </BrowserRouter>
          );
     });

     it("searchbar accepts typing", () => {
          // see: https://on.cypress.io/mounting-react
          cy.mount(
               <BrowserRouter>
                    <AllSpellbooks_Spells />
               </BrowserRouter>
          );
          const typedVal = "1";
          cy.get("#search-spellbooks-spells-bar")
               .type(typedVal)
               .should("have.value", typedVal);
     });

     //---  THIS ONE WAS GLITCHY AND ALSO SUCCESSFULLY EMPTIED MY TABLE LOL-----
     //  it("remove spell button should be clickable", () => {
     //       // see: https://on.cypress.io/mounting-react
     //       cy.mount(
     //            <BrowserRouter>
     //                 <AllSpellbooks_Spells />
     //            </BrowserRouter>
     //       );

     //       cy.get("button").click({
     //            multiple: true,
     //       });
     //  });
});
