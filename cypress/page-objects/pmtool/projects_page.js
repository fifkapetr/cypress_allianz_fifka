import { createCustomElement } from "../../helpers/custom_element";
import { HeaderSection } from "./common/header_section";
import { CreateNewProjectPage } from "./create_new_project_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.pageHeader = createCustomElement("h3.page-title");
    this.addNewProjectButton = createCustomElement(
      'button[test_id="Add Project"]'
    );
    this.searchInput = createCustomElement('[test_id="search_input"]');
  }

  clickAddProject() {
    this.addNewProjectButton.get().click();
    return new CreateNewProjectPage();
  }
}
