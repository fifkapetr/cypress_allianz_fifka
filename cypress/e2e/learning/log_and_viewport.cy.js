describe("Logging and viewport", () => {
  it("Changing resolution and logging into Cypress", () => {
    cy.viewport(1920, 1080);
    cy.visit("https://tredgate.com/pmtool");
    cy.log("AHOOOJ do Cypressu!");
  });
});
