import { faker } from "@faker-js/faker";
import { UserApi } from "../../api/tegb/user_api";
import { AccountsApi } from "../../api/tegb/accounts_api";

describe("Accounts E2E tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName().toLowerCase();
    password = "Allianz2024";
    email = faker.internet.email();
    cy.visit("http://localhost:3001");
    cy.log(username);
    cy.log(password);
    cy.log(email);
  });

  it("Create user and account, login via API test", () => {
    const deposit = 1000;
    const userApi = new UserApi();
    userApi.register(username, password, email).then((response) => {
      cy.wrap(response.body.userId).as("userId");
    });
    userApi.login(username, password).then((response) => {
      const token = response.body.access_token;
      cy.setCookie("access_token", token);
      cy.get("@userId").then((userId) => {
        new AccountsApi(token).createAccount(deposit, userId);
      });
    });
    cy.visit("http://localhost:3001/app");
    cy.get('[data-testid="accounts_section_link"]').click();
    cy.get('[data-testid="account_balance"]').should("contain.text", deposit);
  });
});
