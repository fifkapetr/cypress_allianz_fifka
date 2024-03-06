export class CreateNewProjectPage {
  constructor() {
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.projectNameInput = 'div[data-testid="Name"] input';
    this.startDateInput = 'div[data-testid="Start Date"] input';
    this.fileUploadInput = 'input[type="file"][data-msg-accept]';
    this.saveButton = "button[type='submit']";
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  typeProjectName(projectName) {
    cy.get(this.projectNameInput).type(projectName);
    return this;
  }

  typeStartDate(startDate) {
    cy.get(this.startDateInput).type(startDate);
    return this;
  }

  insertFile(fixtureName) {
    cy.fixture(fixtureName).as("projectUploadFile");
    cy.get(this.fileUploadInput).selectFile("@projectUploadFile", {
      force: true,
    });
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    // TODO: add return new ProjectTasksPage
  }
}
