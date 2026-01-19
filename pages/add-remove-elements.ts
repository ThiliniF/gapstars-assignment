import { Locator, Page } from "@playwright/test";
import BasePage from "./base-page";

export class AddRemoveElementsPage extends BasePage {
  readonly addElementBtn: Locator;
  readonly deleteBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.addElementBtn = page.getByRole("button", { name: "Add Element" });
    this.deleteBtn = page.getByRole("button", { name: "Delete" });
  }

  async clickOnAddElementBtn() {
    await this.addElementBtn.click();
  }

  async clickOnDeleteBtn() {
    await this.deleteBtn.click();
  }
}
