import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage().openPmtool();
  });

  context("Username input tests", () => {
    it("Username is Visible", () => {
      new LoginPage().usernameIsVisible();
    });

    it("Username has placeholder", () => {
      new LoginPage().usernameHasPlaceholder("Username");
    });

    it("Username has value after type", () => {
      new LoginPage().typeUsername("Test").usernameHasValue("Test");
    });
  });

  context("Password input tests", () => {
    it("Password is visible", () => {
      new LoginPage().passwordIsVisible();
    });

    it("Password has placeholder", () => {
      new LoginPage().passwordHasPlaceholder("Password");
    });
  });

  context("Logo Tests", () => {
    it("Logo is visible", () => {
      new LoginPage().logoIsVisible();
    });
  });

  context("Header Tests", () => {
    it("Page Header is visible", () => {
      new LoginPage().pageHeaderIsVisible();
    });

    it("Page Header has text", () => {
      new LoginPage().pageHeaderHasText("Login");
    });
  });

  context("Lost Password Tests", () => {
    it("Lost Password anchor is visible", () => {
      new LoginPage().lostPasswordIsVisible();
    });

    it("Lost Password Anchor has text", () => {
      new LoginPage().lostPasswordHasText("Password forgotten?");
    });
  });

  context("Remember Me Checkbox Tests", () => {
    it("Remember Me Checkbox is visible", () => {
      new LoginPage().rememberMeCheckboxIsVisible();
    });

    it("Remember Me has text", () => {
      new LoginPage().rememberMeHasText("Remember Me");
    });

    it("Remember Me is checked", () => {
      new LoginPage().rememberMeIsChecked();
    });
  });

  context("Login Button Tests", () => {
    it("Login Button is Visible", () => {
      new LoginPage().loginButtonIsVisible();
    });
  });
});
