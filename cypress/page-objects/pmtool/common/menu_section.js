export class MenuSection {
  constructor() {
    this.projectsLink = "#Projects a";
    this.dashboardLink = "#dashboard a";
    this.usersLink = "#Users a.menu-itemsitems1";
  }

  clickUsers() {
    const { UsersPage } = require("../users_page");
    cy.get(this.usersLink).click();
    return new UsersPage();
  }

  clickProjects() {
    const { ProjectsPage } = require("../projects_page");
    cy.get(this.projectsLink).click();
    return new ProjectsPage();
  }

  clickDashboard() {
    const { HomePage } = require("../home_page");
    cy.get(this.dashboardLink).click();
    return new HomePage();
  }
}
