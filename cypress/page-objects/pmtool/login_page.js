import { createCustomElement } from "../../helpers/custom_element";
import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "https://tredgate.com/pmtool";
    this.usernameInput = createCustomElement("#username");
    this.passwordInput = createCustomElement("#password");
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
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  passwordIsVisible() {
    this.passwordInput.isVisible();
    return this;
  }

  passwordHasPlaceholder(placeholder) {
    this.passwordInput.hasPlaceholder(placeholder);
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
    this.usernameInput.isVisible();
    return this;
  }

  usernameHasPlaceholder(placeholder) {
    this.usernameInput.hasPlaceholder(placeholder);
    return this;
  }

  usernameHasValue(value) {
    this.usernameInput.hasValue(value);
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
