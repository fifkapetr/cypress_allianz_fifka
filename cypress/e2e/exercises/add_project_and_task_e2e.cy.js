import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";
import { faker } from "@faker-js/faker";

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
    //{PRIJMENI}_self-exercise_{random_int}
    const projectName = `FIFKA_self-exercise_${faker.number.int({
      min: 10,
      max: 10000,
    })}`;

    //{PRIJMENI}_TASK_{random_int}
    const taskName = `FIFKA_TASK_${faker.number.int({
      min: 10,
      max: 10000,
    })}`;

    new ProjectsPage()
      .clickAddProject()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName(projectName)
      .typeStartDate("2024-03-06")
      .insertFile("projectFile.txt")
      .clickSave()
      .clickAddTask()
      .typeName(taskName)
      .assignTask("Petr Fifka")
      .clickSaveButton()
      .clickProjectInfo()
      .projectTitleHasText(projectName)
      .projectHasCreatedBy("Cypress Allianz")
      .projectHasDateAdded("11/03/2024")
      .projectHasStatus("Open");
  });
});
