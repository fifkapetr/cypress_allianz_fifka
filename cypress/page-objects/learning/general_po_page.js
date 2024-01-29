export class GeneralPOPage {
  constructor() {
    this.someElement = "selector";
  }

  clickSomeElement() {
    cy.get(this.someElement).click();
  }

  typeSomeElement(text) {
    cy.get(this.someElement).type(text);
  }

  typePassword(password) {
    cy.get(this.someElement).type(password);
  }
}
