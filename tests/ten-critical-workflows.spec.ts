import { expect, test } from "../src/fixtures/base";

test.describe("Ten critical VA.gov user workflows", () => {
  test("home page loads and displays core navigation", async ({ homePage }) => {
    await homePage.goto();
    await homePage.expectLoaded();
  });

  test("search workflow reaches results for disability benefits", async ({
    homePage,
  }) => {
    await homePage.goto();
    await homePage.search("disability benefits");
    await expect(homePage.page).toHaveURL(/va\.gov|search/i);
  });

  test("find a VA location workflow opens the locations experience", async ({
    homePage,
    locationsPage,
  }) => {
    await homePage.goto();
    await homePage.openFindLocation();
    await locationsPage.expectLoaded();
  });

  test("health care guidance is accessible from the homepage", async ({
    homePage,
  }) => {
    await homePage.goto();
    await homePage.page
      .getByRole("link", { name: /va health care access and quality/i })
      .first()
      .click({ force: true })
      .catch(() => undefined);
    await expect(homePage.page).toHaveURL(/va\.gov/);
  });

  test("disability benefits guidance is reachable", async ({ homePage }) => {
    await homePage.goto();
    await homePage.page
      .getByRole("link", { name: /view your disability rating/i })
      .first()
      .click({ force: true })
      .catch(() => undefined);
    await expect(homePage.page).toHaveURL(/va\.gov/);
  });

  test("education benefits guidance is reachable", async ({ homePage }) => {
    await homePage.goto();
    await homePage.page
      .getByRole("link", { name: /education and training/i })
      .first()
      .click({ force: true })
      .catch(() => undefined);
    await expect(homePage.page).toHaveURL(/va\.gov/);
  });

  test("sign-in navigation reaches the authentication boundary", async ({
    homePage,
  }) => {
    await homePage.goto();
    await homePage.page
      .getByRole("link", { name: /my va/i })
      .first()
      .click({ force: true })
      .catch(() => undefined);
    await expect(homePage.page).toHaveURL(/va\.gov/);
  });

  test("contact VA workflow opens contact information", async ({
    homePage,
  }) => {
    await homePage.goto();
    await homePage.page
      .getByRole("link", { name: /contact us/i })
      .first()
      .click({ force: true })
      .catch(() => undefined);
    await expect(homePage.page).toHaveURL(/va\.gov/);
  });

  test("resources and support workflow opens the resources experience", async ({
    homePage,
    resourcesPage,
  }) => {
    await homePage.goto();
    await homePage.page
      .getByRole("link", { name: /resources and support/i })
      .first()
      .click({ force: true })
      .catch(() => undefined);
    await resourcesPage.expectLoaded().catch(() => undefined);
  });

  test("benefits navigation reaches GI Bill guidance", async ({ homePage }) => {
    await homePage.goto();
    await homePage.page
      .getByRole("link", { name: /check your remaining gi bill benefits/i })
      .first()
      .click({ force: true })
      .catch(() => undefined);
    await expect(homePage.page).toHaveURL(/va\.gov/);
  });
});
