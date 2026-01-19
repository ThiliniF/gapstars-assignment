import test, { expect } from "@playwright/test";
import PageObjectManager from "../pages/page-object-manager";

test.describe("The Internet Application - Checkboxes", () => {
  let pageObjectManager: PageObjectManager;

  test("Validate Checkboxes", async ({ page }) => {
    pageObjectManager = new PageObjectManager(page);
    await page.goto("/");
    await pageObjectManager.homePage.navigateToPage("Checkboxes");
    await pageObjectManager.checkboxesPage.clickOnCheckbox(0);
    await expect(
      pageObjectManager.checkboxesPage.checkbox.nth(0),
    ).toBeChecked();
    await pageObjectManager.checkboxesPage.clickOnCheckbox(1);
    await expect(
      pageObjectManager.checkboxesPage.checkbox.nth(1),
    ).not.toBeChecked();
  });
});
