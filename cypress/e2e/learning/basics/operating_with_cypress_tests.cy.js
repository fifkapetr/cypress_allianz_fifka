describe("Operating with Cypress Tests", () => {
  it("Login test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_allianz");
    cy.get("#password").type("Heslo1234");
    cy.get(".btn").click();
  });
});
