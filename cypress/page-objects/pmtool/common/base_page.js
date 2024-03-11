export class BasePage {
  constructor(path) {
    this.url = "https://tredgate.com/pmtool/index.php?";
    this.path = path;
  }

  visit() {
    cy.visit(this.url + this.path);
    return this;
  }
}
