import { HeaderSection } from "./common/header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super("module=dashboard/dashboard");
    this.welcomePageHeader = "#welcome-page-header";
    // ! Nemůžeme volat should, pokud používáme přímé otevření
    // cy.get(this.welcomePageHeader).should("be.visible");
  }
}
