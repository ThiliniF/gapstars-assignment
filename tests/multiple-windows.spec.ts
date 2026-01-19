import test, { expect } from "@playwright/test";
import PageObjectManager from "../pages/page-object-manager";

test.describe("The Internet Application - Multiple Windows", () => {
  let pageObjectManager: PageObjectManager;

  test("Validate Multiple Windows", async ({ page }) => {
    pageObjectManager = new PageObjectManager(page);
    await page.goto("/");
    await pageObjectManager.homePage.navigateToPage("Multiple Windows");
    await expect(page.getByText("Opening a new window")).toBeVisible();
    await pageObjectManager.windowsPage.clickOnClickHereLink();
    const newPage = await pageObjectManager.windowsPage.getNewPage();
    await expect(newPage).toHaveURL("/windows/new");
    await expect(newPage.getByText("New Window")).toBeVisible();
  });
});
