import { expect, test } from "@playwright/test";

test.describe("Visual regression checks", () => {
  test("home page baseline snapshot", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("https://www.va.gov", { waitUntil: "domcontentloaded" });

    await expect(page).toHaveScreenshot("va-home.png", {
      animations: "disabled",
      maxDiffPixels: 1000,
      maxDiffPixelRatio: 0.02,
    });
  });
});
