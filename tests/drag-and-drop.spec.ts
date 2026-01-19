import test, { expect } from "@playwright/test";
import PageObjectManager from "../pages/page-object-manager";

test.describe("The Internet Application - Drag and Drop", () => {
  let pageObjectManager: PageObjectManager;

  test("Validate Drag and Drop", async ({ page }) => {
    pageObjectManager = new PageObjectManager(page);
    await page.goto("/");
    await pageObjectManager.homePage.navigateToPage("Drag and Drop");
    await pageObjectManager.dragAndDropPage.dragColumnAtoB();
    await expect(pageObjectManager.dragAndDropPage.columnA).toHaveText("B");
  });
});
