import { expect, test } from "@playwright/test";

test.describe("Visual regression checks", () => {
  test("home page baseline snapshot", async ({ page }) => {
    await page.goto("https://www.va.gov", { waitUntil: "networkidle" });
    await expect(page).toHaveScreenshot("va-home.png", {
      animations: "disabled",
    });
  });
});
