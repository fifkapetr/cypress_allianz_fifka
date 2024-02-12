import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it.skip("BUG-123: Click forgotten password and return to LoginPage", () => {
    new LoginPage().clickLostPassword().clickBack();
  });

  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("cypress_allianz")
      .typePassword("Heslo1234")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
});
