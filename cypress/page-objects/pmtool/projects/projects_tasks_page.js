import { HeaderSection } from "../common/header_section";
import { CreateNewTaskPage } from "./create_new_task_page";
import { ProjectInfoPage } from "./project_info_page";

export class ProjectsTasksPage extends HeaderSection {
  constructor() {
    super();
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
