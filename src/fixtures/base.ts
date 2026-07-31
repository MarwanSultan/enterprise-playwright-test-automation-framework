import {
  test as base,
  type APIRequestContext,
  type Page,
} from "@playwright/test";
import { BenefitsPage } from "../pages/BenefitsPage";
import { HomePage } from "../pages/HomePage";
import { LocationsPage } from "../pages/LocationsPage";
import { ResourcesPage } from "../pages/ResourcesPage";
import { SearchPage } from "../pages/SearchPage";

const VA_BASE_URL = "https://www.va.gov";

export type AutomationFixtures = {
  homePage: HomePage;
  searchPage: SearchPage;
  locationsPage: LocationsPage;
  benefitsPage: BenefitsPage;
  resourcesPage: ResourcesPage;
  page: Page;
  apiHeaders: Record<string, string>;
  apiClient: APIRequestContext;
};

export const test = base.extend<AutomationFixtures>({
  page: async ({ page }, use) => {
    await page.setViewportSize({ width: 1440, height: 1200 });
    await page.goto(VA_BASE_URL, { waitUntil: "domcontentloaded" });
    await use(page);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },

  locationsPage: async ({ page }, use) => {
    await use(new LocationsPage(page));
  },

  benefitsPage: async ({ page }, use) => {
    await use(new BenefitsPage(page));
  },

  resourcesPage: async ({ page }, use) => {
    await use(new ResourcesPage(page));
  },

  apiHeaders: async ({ page: _page }, use) => {
    await use({
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "Playwright-Enterprise-Framework/1.0",
    });
  },

  apiClient: async ({ request }, use) => {
    await use(request);
  },
});

export { expect } from "@playwright/test";
