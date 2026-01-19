import { Locator, Page } from "@playwright/test";
import BasePage from "./base-page";

export class WindowsPage extends BasePage {
  readonly clickHereLink: Locator;
  constructor(page: Page) {
    super(page);
    this.clickHereLink = page.getByRole("link", { name: "Click Here" });
  }

  async clickOnClickHereLink() {
    await this.clickHereLink.click();
  }

  async getNewPage(): Promise<Page> {
    const newPage = await this.page.context().waitForEvent("page");
    await newPage.waitForLoadState();
    return newPage;
  }
}
