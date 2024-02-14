import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Polymorphsim tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_allianz")
      .typePassword("Heslo1234")
      .clickLogin();
  });

  it("Login and logout in Projects", () => {
    new HomePage().clickProjects().clickProfile().clickLogout();
  });

  it.only("Login and logout in Projects", () => {
    new HomePage()
      .clickProjects()
      .clickDashboard()
      .clickUsers()
      .clickProfile()
      .clickLogout();
  });
});
