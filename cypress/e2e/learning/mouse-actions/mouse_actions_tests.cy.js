describe("Mouse actions tests", () => {
  it("Scroll into view", () => {
    cy.visit("https://tredgate.com/webtrain/");
    cy.get("body h1").scrollIntoView();
  });

  it("Double click test", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("div#double-click").dblclick();
  });

  it("Click and hold test", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#click-box").trigger("mousedown");
    cy.wait(7500);
    cy.get("#click-box").trigger("mouseup");
  });

  it("Drag and dro tests", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it.only("Real Hover Test", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get(".hover")
      .realHover()
      .then(() => {
        cy.wait(4000);
        cy.get(".hover a").click();
      });
  });
});
