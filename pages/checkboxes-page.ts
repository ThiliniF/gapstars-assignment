import { Locator, Page } from "@playwright/test";
import BasePage from "./base-page";

export class CheckboxesPage extends BasePage {
  readonly checkbox: Locator;

  constructor(page: Page) {
    super(page);
    this.checkbox = page.locator('input[type="checkbox"]');
  }

  async clickOnCheckbox(checkboxNo: number) {
    await this.checkbox.nth(checkboxNo).click();
  }
}
