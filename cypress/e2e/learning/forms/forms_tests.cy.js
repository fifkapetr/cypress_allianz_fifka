describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("https://tredgate.com/webtrain/registration.html");
  });

  it("Check radio button", () => {
    cy.get('input[name="subscription"]').check("basic");
    cy.get("#basic").should("be.checked");
  });

  it("Check 2 interests", () => {
    // cy.get('input[name="interests[]"]').check("sports");
    // cy.get('input[name="interests[]"]').check("reading");
    // * Check na 1 řádku pomocí array
    cy.get('input[name="interests[]"]').check(["sports", "reading"]);
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-reading").should("be.checked");
    cy.get("#interests-travel").should("not.be.checked");
  });

  it("Check and uncheck checkbox", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get('input[name="interests[]"]').uncheck("sports");
    cy.get("#interests-sports").should("not.be.checked");
  });

  it("Clean and fill name", () => {
    cy.get("#name")
      .clear()
      .type("Petr Fifka")
      .should("have.value", "Petr Fifka");
  });

  it("Select female gender", () => {
    cy.get("#gender").select("female").should("have.value", "female");
  });

  it("Submit form", () => {
    cy.get("form").submit();
    cy.get("#message-box").should("be.visible");
  });

  it("Upload File", () => {
    cy.fixture("test.txt", { encoding: null }).as("fileToUpload");
    cy.get("input[type='file']").selectFile("@fileToUpload");
  });
});
