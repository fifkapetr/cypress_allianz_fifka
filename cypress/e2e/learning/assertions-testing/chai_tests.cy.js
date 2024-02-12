import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login header has text 'Login'", () => {
    cy.get(".form-title").should("have.text", "Login");
    cy.get(".form-title").should("contain.text", "Log");
  });

  it.skip('FAILING: Login header has text "Login2"', () => {
    cy.get(".form-title").should("have.text", "Login2");
  });

  it("Password forgotten has text", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it("Username has value", () => {
    const username = "TEST";
    cy.get("#username").type(username).should("have.value", username);
  });

  it("Username has form-control class", () => {
    cy.get("#username").should("have.class", "form-control");
  });

  it("Login button is visible", () => {
    cy.get(".btn").should("be.visible");
    cy.get(".btn").should("exist");
  });

  it("Username has placeholder", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });
});
