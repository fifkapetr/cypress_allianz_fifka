import { ProjectsTasksPage } from "./projects_tasks_page";

export class CreateNewTaskPage {
  constructor() {
    this.nameInput = '[data-testid="Name"] input';
    this.saveButton = 'button[type="submit"]';
    this.assigneeCheckbox = ".select_checkboxes_tag label";
  }

  assignTask(assigneeName) {
    cy.contains(this.assigneeCheckbox, assigneeName);
    return this;
  }

  typeName(taskName) {
    cy.get(this.nameInput).type(taskName);
    return this;
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
    return new ProjectsTasksPage();
  }
}
