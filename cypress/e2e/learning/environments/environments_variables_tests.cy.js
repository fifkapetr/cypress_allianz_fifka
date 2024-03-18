describe("Environments tests", () => {
  it("Open AutomationTestStore", () => {
    cy.visit(Cypress.env("automation_test_store_url"));
  });

  it("Open Webtrain", () => {
    cy.visit(Cypress.env("webtrain_url"));
  });

  it("Open Eshop", () => {
    cy.visit(Cypress.env("eshop_url"));
  });

  it("Open Pmtool", () => {
    cy.visit(Cypress.env("pmtool_url"));
  });
});
