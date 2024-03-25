import { faker } from "@faker-js/faker";
import { UserApi } from "../../../api/tegb/user_api";

describe("Send HTTP Requests Tests", () => {
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
  });
  it("POST registration TEG#B", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userId");
      expect(response.body.email).to.be.a("string");
      expect(response.body.username).to.eq(username);
    });
  });

  it("POST login have response code 201", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username: "fifka_petr",
        password: "Tredgate2023#",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it.only("Register and login via API objects", () => {
    const userApi = new UserApi();
    userApi.register(username, password, email).then((response) => {
      expect(response.status).to.eq(201);
    });

    userApi.login(username, password).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
