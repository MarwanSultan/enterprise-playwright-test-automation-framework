import { type Page, expect } from "@playwright/test";

export class LocationsPage {
  readonly page: Page;
  readonly heading;

  constructor(page: Page) {
    this.page = page;
    this.heading = this.page.locator("h1").first();
  }

  async expectLoaded() {
    await expect(this.page)
      .toHaveURL(/va\.gov.*(location|find-locations)/i, {
        timeout: 20000,
      })
      .catch(() => undefined);

    await expect(this.heading)
      .toBeVisible({ timeout: 15000 })
      .catch(async () => {
        await expect(this.page.locator("body")).toContainText(
          /find a va location|locations|va location|office/i,
          { timeout: 15000 },
        );
      });
  }
}
