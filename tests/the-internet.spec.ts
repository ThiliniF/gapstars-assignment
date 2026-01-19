import test, { expect } from "@playwright/test";
import PageObjectManager from "../pages/page-object-manager";

test.describe("The Internet Application Tests", () => {
  let pageObjectManager: PageObjectManager;

  test.beforeEach(async ({ page }) => {
    pageObjectManager = new PageObjectManager(page);
    await page.goto("/");
  });

  test("Validate Add/Remove Elements", async ({ page }) => {
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

  test("Validate Checkboxes", async ({ page }) => {
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

  test("Validate Drag and Drop", async ({ page }) => {
    await pageObjectManager.homePage.navigateToPage("Drag and Drop");
    await pageObjectManager.dragAndDropPage.dragColumnAtoB();
    await expect(pageObjectManager.dragAndDropPage.columnA).toHaveText("B");
  });

  test("Validate Multiple Windows", async ({ page }) => {
    await pageObjectManager.homePage.navigateToPage("Multiple Windows");
    await expect(page.getByText("Opening a new window")).toBeVisible();
    await pageObjectManager.windowsPage.clickOnClickHereLink();
    const newPage = await pageObjectManager.windowsPage.getNewPage();
    await expect(newPage).toHaveURL("/windows/new");
    await expect(newPage.getByText("New Window")).toBeVisible();
  });
});

test.describe("Basic Auth Test", () => {
  test.use({
    httpCredentials: {
      username: process.env.AUTH_USERNAME!,
      password: process.env.AUTH_PASSWORD!,
    },
  });
  test("Validate Basic Auth", async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    await page.goto("/");
    await pageObjectManager.homePage.navigateToPage("Basic Auth");
    await expect(
      page.getByText("Congratulations! You must have the proper credentials."),
    ).toBeVisible();
  });
});
