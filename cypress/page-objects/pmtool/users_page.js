import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageHeader = "h3.page-title";
    this.addNewUserButton = 'button[test_id="Add User"]';
    //cy.get(this.pageHeader).should("have.text", "Users");
  }

  pageHeaderIsVisible() {
    cy.get(this.pageHeader).should("be.visible");
    return this;
  }

  pageHeaderHasText(text) {
    cy.get(this.pageHeader).should("have.text", text);
    return this;
  }

  addNewUserButtonIsVisible() {
    cy.get(this.addNewUserButton).should("be.visible");
    return this;
  }

  addNewUserButtonHasText(text) {
    cy.get(this.addNewUserButton).should("have.text", text);
    return this;
  }
}
