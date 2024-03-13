import { HeaderSection } from "../common/header_section";
import { CreateNewTaskPage } from "./create_new_task_page";
import { ProjectInfoPage } from "./project_info_page";

export class ProjectsTasksPage extends HeaderSection {
  /**
   * @param {string} projectId is used for direct opening project page. If it is used in E2E test, do not fill it.
   */
  constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`);
    this.addTaskButton = '[test_id="Add Task"]';
    this.projectInfoButton = ".navbar-header a";
  }

  clickAddTask() {
    cy.get(this.addTaskButton).click();
    return new CreateNewTaskPage();
  }

  clickProjectInfo() {
    cy.get(this.projectInfoButton).click();
    return new ProjectInfoPage();
  }
}
