import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Debugging", () => {
  it("Debugging pmtool", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_allianz");
    cy.get("#password").type("Heslo1234");
    cy.get(".btn").pause().click();
  });
});
