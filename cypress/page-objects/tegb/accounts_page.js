import { createCustomElement } from "../../helpers/custom_element";

export class AccountsPage {
  constructor() {
    this.titleH1 = createCustomElement('[data-testid="title"]');
  }

  titleHasText(text) {
    this.titleH1.hasText(text);
    return this;
  }
}
