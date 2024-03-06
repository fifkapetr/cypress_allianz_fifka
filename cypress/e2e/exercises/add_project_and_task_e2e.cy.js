import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";

describe("Create Projects Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProjects();
  });
  it("Create new project and task end2end", () => {
    new ProjectsPage()
      .clickAddProject()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName("PROJECT") //TODO: generate unique
      .typeStartDate("2024-03-06")
      .insertFile("projectFile.txt")
      .clickSave();
  });
});
