describe("Login Tests with XPath Selectors", () => {
  it("Login and Logout with XPath", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.xpath("//input[@id='username']").type("cypress_allianz");
    cy.xpath("//input[@id='password']").type("Heslo1234");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//li[@id='user_dropdown']").click();
    cy.xpath("//li[@id='logout']").click();
  });
});
