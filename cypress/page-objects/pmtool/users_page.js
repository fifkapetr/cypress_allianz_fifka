import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageHeader = "h3.page-title";
    cy.get(this.pageHeader).should("have.text", "Users");
  }
}
