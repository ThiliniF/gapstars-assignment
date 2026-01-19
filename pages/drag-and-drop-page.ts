import { Locator, Page } from "@playwright/test";
import BasePage from "./base-page";

export class DragAndDropPage extends BasePage {
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    super(page);
    this.columnA = page.locator("#column-a");
    this.columnB = page.locator("#column-b");
  }

  async dragColumnAtoB() {
    await this.columnA.dragTo(this.columnB);
  }
}
