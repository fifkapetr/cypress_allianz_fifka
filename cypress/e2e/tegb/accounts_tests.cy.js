import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("Tegb Accounts Page Tests", () => {
  it("Login, click Accounts, title has text", () => {
    new TegBLoginPage()
      .openTegB()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .clickAccounts()
      .titleHasText("Accounts");
  });
});
