import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_allianz")
      .typePassword("Heslo1234")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
});