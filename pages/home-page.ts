import { Locator, Page } from "@playwright/test";
import BasePage from "./base-page";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToPage(linkName: string) {
    await this.page.getByRole("link", { name: linkName }).click();
  }
}
