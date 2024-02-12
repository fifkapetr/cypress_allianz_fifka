import { HomePage } from "../../../page-objects/pmtool/home_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha tests", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.log("Běžím před každým testem");

    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_allianz")
      .typePassword("Heslo1234")
      .clickLogin();
  });

  it("Pmtool login", () => {
    cy.log("Prázdný test na přihlášení");
  });

  it("Pmtool login and logout", () => {
    new HomePage().clickProfile().clickLogout();
  });

  afterEach(() => {
    cy.log("Běžím na konci každého testu");
  });
});
