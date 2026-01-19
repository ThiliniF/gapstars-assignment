import test, { expect } from "@playwright/test";
import PageObjectManager from "../pages/page-object-manager";

test.describe("The Internet Application - Add/Remove Elements", () => {
  let pageObjectManager: PageObjectManager;

  test("Validate Add/Remove Elements", async ({ page }) => {
    pageObjectManager = new PageObjectManager(page);
    await page.goto("/");
    await pageObjectManager.homePage.navigateToPage("Add/Remove Elements");
    await expect(page.getByText("Add/Remove Elements")).toBeVisible();
    await pageObjectManager.addRemoveElementsPage.clickOnAddElementBtn();
    await expect(
      pageObjectManager.addRemoveElementsPage.deleteBtn,
    ).toBeVisible();
    await pageObjectManager.addRemoveElementsPage.clickOnDeleteBtn();
    await expect(pageObjectManager.addRemoveElementsPage.deleteBtn).toHaveCount(
      0,
    );
  });
});
