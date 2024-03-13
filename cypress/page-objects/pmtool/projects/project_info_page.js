import { HeaderSection } from "../common/header_section";

export class ProjectInfoPage extends HeaderSection {
  /**
   * @param {string} projectId is used for direct opening project page. If it is used in E2E test, do not fill it.
   */
  constructor(projectId = "") {
    super(`module=items/info&path=21-${projectId}`);
    this.projectTitleDiv = ".portlet-title .caption";
    //alternativní xpath Status: //th[contains(text(), "Status")]//..//td//div
    this.statusDiv = "tr.form-group-157 td div";
    this.dateAddedTd = "tr.form-group-154 td";
    this.createdBySpan = "tr.form-group-155 td span";
  }

  projectTitleHasText(projectTitleText) {
    cy.get(this.projectTitleDiv).should("contain.text", projectTitleText);
    return this;
  }

  projectHasStatus(status) {
    cy.get(this.statusDiv).should("have.text", status);
    return this;
  }

  /**  Format dd/mm/yyyy */
  projectHasDateAdded(dateAdded) {
    cy.get(this.dateAddedTd).should("contain.text", dateAdded);
    return this;
  }

  projectHasCreatedBy(createdByName) {
    cy.get(this.createdBySpan).should("have.text", createdByName);
    return this;
  }
}
