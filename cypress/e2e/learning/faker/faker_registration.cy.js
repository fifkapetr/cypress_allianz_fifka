//import { faker } from "@faker-js/faker";
import { fakerCS_CZ as faker } from "@faker-js/faker";

describe("Using faker", () => {
  it("Generate unique data with faker", () => {
    const firstName = faker.person.firstName();
    const email = faker.internet.exampleEmail({ firstName: firstName });
    const cow = faker.animal.cow();
    cy.log(firstName);
    cy.log(email);
    cy.log(cow);
  });
});
