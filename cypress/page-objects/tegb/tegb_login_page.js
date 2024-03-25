import { DashboardPage } from "./dashboard_page";

export class TegBLoginPage {
  constructor() {
    this.usernameInput = '[data-testid="username"]';
    this.passwordInput = '[data-testid="password"]';
    this.loginButton = '[data-testid="log_in"]';
    cy.intercept("/auth/login").as("login_api");
  }

  openTegB() {
    cy.visit("http://localhost:3001");
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
    cy.wait("@login_api");
    return new DashboardPage();
  }
}
