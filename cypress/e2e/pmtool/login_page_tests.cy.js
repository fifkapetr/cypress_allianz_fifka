import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Page header has text 'Login'", () => {
    new LoginPage().pageHeaderHasText("Login");
  });

  it("Alert not exist after opening pmtool", () => {
    new LoginPage().alertNotExist();
  });
});
