import { type Page, expect } from "@playwright/test";

export class BenefitsPage {
  readonly page: Page;
  readonly heading;

  constructor(page: Page) {
    this.page = page;
    this.heading = this.page.locator("h1").first();
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }
}
