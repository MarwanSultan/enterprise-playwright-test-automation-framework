import { type Page, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly header;
  readonly searchControl;
  readonly locationLink;

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.getByRole("heading", {
      name: /welcome to va\.gov/i,
    });
    this.searchControl = this.page
      .locator("text=Search")
      .filter({ hasNot: this.page.locator("input") })
      .first();
    this.locationLink = this.page
      .getByRole("link", { name: /find a va location/i })
      .first();
  }

  async goto() {
    await this.page.goto("https://www.va.gov", {
      waitUntil: "domcontentloaded",
    });
  }

  async expectLoaded() {
    await expect(this.header).toBeVisible();
    await expect(this.searchControl).toBeVisible();
  }

  async openFindLocation() {
    await this.locationLink.click({ force: true });
    await this.page.waitForLoadState("domcontentloaded").catch(() => undefined);
  }

  async search(query: string) {
    await this.searchControl.click();
    await this.page.evaluate((value: string) => {
      const element = globalThis.document.querySelector(
        'input[aria-label="Search"], input#search-header-dropdown-input-field',
      ) as HTMLInputElement | null;
      if (element) {
        element.value = value;
        element.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, query);
    await this.page.keyboard.press("Enter");
  }
}
