import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("Users page atomic tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new UsersPage().visit();
  });

  context("Title tests", () => {
    it("Title is visible", () => {
      new UsersPage().pageHeaderIsVisible();
    });

    it("Title has text", () => {
      new UsersPage().pageHeaderHasText("Users");
    });
  });

  context("Add user button tests", () => {
    it("Add user button is visible", () => {
      new UsersPage().addNewUserButtonIsVisible();
    });

    it("Add user button has text", () => {
      new UsersPage().addNewUserButtonHasText("Add User");
    });
  });
});
