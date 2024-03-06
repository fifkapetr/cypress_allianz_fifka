describe("Keyboard arguments", () => {
  it("Confirm form by pressing enter key", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_allianz");
    cy.get("#password").type("Heslo1234{enter}");
  });
});
