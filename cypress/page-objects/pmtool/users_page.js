import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super();
    this.pageHeader = "h3.page-title";
    cy.get(this.pageHeader).should("have.text", "Users");
  }
}
