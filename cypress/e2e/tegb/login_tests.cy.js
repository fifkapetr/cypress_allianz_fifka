import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("TEG#B Login Tests", () => {
  it("Login to TEG#B", () => {
    new TegBLoginPage()
      .openTegB()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
