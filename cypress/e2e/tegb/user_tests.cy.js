import { faker } from "@faker-js/faker";
import { UserApi } from "../../api/tegb/user_api";

describe("TEG#B user tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = "Tredgate2024";
    email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);
    cy.visit("http://localhost:3001/");
  });

  it("Register and login via API", () => {
    const userApi = new UserApi();
    userApi.register(username, password, email);
    userApi.login(username, password).then((response) => {
      const access_token = response.body.access_token;
      cy.setCookie("access_token", access_token);
    });
    cy.visit("http://localhost:3001/app");
  });
});
