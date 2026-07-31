import { expect, test } from "@playwright/test";

test.describe("Performance smoke checks", () => {
  test("homepage responds within a reasonable time", async ({ page }) => {
    const start = Date.now();
    await page.goto("https://www.va.gov", { waitUntil: "domcontentloaded" });
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(20000);
  });
});
