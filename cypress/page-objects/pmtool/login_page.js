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
    this.logoImg = ".login-page-logo img";
    this.rememberMeCheckbox = "#uniform-remember_me";
    this.rememberMeText = ".checkbox";
  }

  alertNotExist() {
    cy.get(this.alertDiv).should("not.exist");
    return this;
  }

  pageHeaderIsVisible() {
    cy.get(this.pageHeader).should("be.visible");
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

  lostPasswordIsVisible() {
    cy.get(this.lostPasswordAnchor).should("be.visible");
    return this;
  }

  lostPasswordHasText(text) {
    cy.get(this.lostPasswordAnchor).should("have.text", text);
    return this;
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

  passwordIsVisible() {
    cy.get(this.passwordInput).should("be.visible");
    return this;
  }

  passwordHasPlaceholder(placeholder) {
    cy.get(this.passwordInput).should("have.attr", "placeholder", placeholder);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  loginButtonIsVisible() {
    cy.get(this.loginButton).should("be.visible");
    return this;
  }

  usernameIsVisible() {
    cy.get(this.usernameInput).should("be.visible");
    return this;
  }

  usernameHasPlaceholder(placeholder) {
    cy.get(this.usernameInput).should("have.attr", "placeholder", placeholder);
    return this;
  }

  usernameHasValue(value) {
    cy.get(this.usernameInput).should("have.value", value);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logoImg).should("be.visible");
    return this;
  }

  rememberMeCheckboxIsVisible() {
    cy.get(this.rememberMeCheckbox).should("be.visible");
    return this;
  }

  rememberMeHasText(text) {
    cy.get(this.rememberMeText).should("contain.text", text);
    return this;
  }

  rememberMeIsChecked() {
    cy.get(this.rememberMeCheckbox).click();
    cy.get(this.rememberMeCheckbox + " #remember_me").should("be.checked");
    return this;
  }
}
