import test, { expect } from "@playwright/test";
import PageObjectManager from "../pages/page-object-manager";

test.describe("The Internet Application - Basic Auth", () => {
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
