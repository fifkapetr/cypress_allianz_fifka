import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Lost Password Tests", () => {
  it("End to end lost password", () => {
    new LoginPage()
      .clickLostPassword()
      .typeEmail("lost_password@tredgate.cz")
      .typeUsername("lost_password_user")
      .clickSubmit();
  });

  it("Click back on lost password page", () => {
    new LoginPage().clickLostPassword().clickBack();
  });
});
