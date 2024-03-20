describe("Multi Domain test", () => {
  it("cy.origin test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").should("be.visible");
    cy.origin("https://tredgate.cz", () => {
      cy.visit("/");
      cy.get(".cmplz-deny").click();
    });
  });
});
