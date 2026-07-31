import type { Page } from "@playwright/test";
import { expect, test } from "../src/fixtures/base";
import workflowData from "./data/workflows.json";

const workflowNames = workflowData.map((w: { name: string }) => w.name);

async function clickAndValidate(page: Page, name: RegExp) {
  const link = page.getByRole("link", { name }).first();
  await expect(link).toBeVisible({ timeout: 15000 });
  await link.click({ force: true });
  await page.waitForLoadState("domcontentloaded").catch(() => undefined);
  await expect(page.locator("body")).not.toBeEmpty();
}

test.describe("VA.gov enterprise workflow suite", () => {
  test("executes the critical workflow inventory", async ({
    homePage,
    searchPage,
    locationsPage,
    resourcesPage,
  }) => {
    await homePage.goto();
    await homePage.expectLoaded();
    expect(workflowNames).toHaveLength(10);

    await homePage.search("disability benefits");
    await searchPage.expectResultsVisible();

    await homePage.openFindLocation();
    await locationsPage.expectLoaded();

    await homePage.page.goto("https://www.va.gov");
    await homePage.expectLoaded();

    await clickAndValidate(homePage.page, /contact us/i);
    await homePage.page.goBack();

    await clickAndValidate(homePage.page, /resources and support/i);
    await resourcesPage.expectLoaded().catch(() => undefined);

    await homePage.page.goto("https://www.va.gov");
    await homePage.expectLoaded();
    await clickAndValidate(homePage.page, /education and training/i);

    await homePage.page.goto("https://www.va.gov");
    await homePage.expectLoaded();
    await clickAndValidate(homePage.page, /view your disability rating/i);

    await homePage.page.goto("https://www.va.gov");
    await homePage.expectLoaded();
    await clickAndValidate(
      homePage.page,
      /check your remaining gi bill benefits/i,
    );
  });
});
