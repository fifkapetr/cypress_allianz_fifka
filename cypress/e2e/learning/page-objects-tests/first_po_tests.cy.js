import { GeneralPOPage } from "../../../page-objects/learning/general_po_page";

describe("First Page Objects Tests", () => {
  it("General PO test", () => {
    const generalPage = new GeneralPOPage();
    generalPage.clickSomeElement();
    generalPage.typePassword("Password");
  });
});
