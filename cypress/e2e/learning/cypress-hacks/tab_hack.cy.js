describe("Tab hack checks", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
  });
  it("Modify tab to open in same screen", () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('#contact_form input[name="first_name"]').type("Tab hacks!");
  });

  it("Failing click and open new tab", () => {
    cy.get("#contact-us").click();
    cy.get('#contact_form input[name="first_name"]').type("Tab hacks!");
  });
});
