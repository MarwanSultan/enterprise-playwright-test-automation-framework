import { type Page, expect } from "@playwright/test";

export class SearchPage {
  readonly page: Page;
  readonly resultsHeading;

  constructor(page: Page) {
    this.page = page;
    this.resultsHeading = this.page.locator("h1, h2").first();
  }

  async expectResultsVisible() {
    await expect(this.resultsHeading).toBeVisible();
  }
}
