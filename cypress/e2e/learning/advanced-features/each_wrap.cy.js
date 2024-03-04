import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Using Each and Wrap function", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_allianz")
      .typePassword("Heslo1234")
      .clickLogin()
      .clickProjects();
  });

  it("Checking if all rows in Project table has actions delete and edit", () => {
    cy.get("tr[test-id]").each((row) => {
      cy.wrap(row).within(() => {
        cy.get("a[title='Delete']").should("be.visible");
        cy.get("a[title='Edit']").should("be.visible");
        cy.get('[test_id="fieldtype_id"]')
          .invoke("text")
          .then((idValue) => {
            cy.log(idValue);
          });
      });
    });
  });
});
