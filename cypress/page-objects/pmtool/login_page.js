import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.lostPasswordAnchor = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.alertDiv = ".alert";
  }

  alertNotExist() {
    cy.get(this.alertDiv).should("not.exist");
    return this;
  }

  pageHeaderHasText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  clickLostPassword() {
    cy.get(this.lostPasswordAnchor).click();
    return new LostPasswordPage();
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  //vytvoř metody: typePassword, clickLogin
}
