import newProjectData from "../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";
import { CreateNewProjectPage } from "../../page-objects/pmtool/create_new_project_page";

describe("Data Driven Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new ProjectsPage().visit().clickAddProject();
  });

  newProjectData.forEach((projectData) => {
    it(`DDT Create Project: ${projectData.description}`, () => {
      const projectName =
        projectData.name_prefix + faker.number.int({ max: 99999 });
      const startDateFormatted = getStartDate(projectData.start_date);
      cy.log(startDateFormatted);
      cy.log(projectName);

      new CreateNewProjectPage()
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .typeProjectName(projectName)
        .typeStartDate(startDateFormatted)
        .clickSave();
    });
  });
});

function getStartDate(startDate) {
  const format = "YYYY-MM-DD";
  let result;
  switch (startDate) {
    case "today":
      result = moment().format(format);
      break;
    case "tomorrow":
      result = moment().add(1, "days").format(format);
      break;
    case "yesterday":
      result = moment().subtract(1, "days").format(format);
      break;
    default:
      throw new Error("Invalid start date");
  }
  return result;
}
