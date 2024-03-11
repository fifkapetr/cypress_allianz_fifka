import { HeaderSection } from "./common/header_section";
import { CreateNewProjectPage } from "./create_new_project_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.pageHeader = "h3.page-title";
    cy.get(this.pageHeader).should("contain.text", "Projects");
    this.addNewProjectButton = 'button[test_id="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.addNewProjectButton).click();
    return new CreateNewProjectPage();
  }
}
