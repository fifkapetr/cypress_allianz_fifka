import { createCustomElement } from "../../helpers/custom_element";
import { AccountsPage } from "./accounts_page";

export class DashboardPage {
  constructor() {
    cy.intercept("/accounts/user/*").as("accounts_api");
    this.accountsMenu = createCustomElement(
      '[data-testid="accounts_section_link"]'
    );
  }

  clickAccounts() {
    this.accountsMenu.get().click();
    cy.wait("@accounts_api");
    return new AccountsPage();
  }
}
