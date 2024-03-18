import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../../page-objects/pmtool/projects_page";

describe("Projects Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new ProjectsPage().visit();
  });

  context("Page Header Tests", () => {
    it("Page Header is visible", () => {
      new ProjectsPage().pageHeader.isVisible();
    });

    it("Page Header have text", () => {
      new ProjectsPage().pageHeader.containsText("Projects");
    });
  });

  context("Add New Project Button Tests", () => {
    it("Button is visible", () => {
      new ProjectsPage().addNewProjectButton.isVisible();
    });

    it("Button have text", () => {
      new ProjectsPage().addNewProjectButton.hasText("Add Project");
    });
  });

  context("Search Input Tests", () => {
    it("Input is visible", () => {
      new ProjectsPage().searchInput.isVisible();
    });

    it("Input has Placeholder", () => {
      new ProjectsPage().searchInput.hasPlaceholder("Search");
    });

    it("Input is editable", () => {
      new ProjectsPage().searchInput.get().clear().type("SearchText");
      new ProjectsPage().searchInput.hasValue("SearchText");
    });
  });
});
