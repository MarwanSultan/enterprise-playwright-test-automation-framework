import { expect, test } from "../src/fixtures/base";

test.describe("Accessibility checks", () => {
  test("home page exposes accessible landmarks", async ({ homePage }) => {
    await homePage.goto();
    await homePage.expectLoaded();

    await expect(homePage.page.locator("main")).toHaveCount(1);
    await expect(homePage.page.locator("header")).toHaveCount(1);
    await expect(homePage.page.locator("nav")).toHaveCount(1);
  });
});
