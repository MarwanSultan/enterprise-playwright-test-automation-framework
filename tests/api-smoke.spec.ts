import { expect, test } from "../src/fixtures/base";

const SECURITY_HEADERS = ["strict-transport-security", "x-frame-options"];

test.describe("Enterprise API contract suite", () => {
  test.beforeEach(async ({ apiClient }, testInfo) => {
    const response = await apiClient.get("/");
    expect(response.status()).toBe(200);
    testInfo.annotations.push({
      type: "api-suite-setup",
      description: "baseline smoke call completed successfully",
    });
  });

  test.afterEach(async ({ apiClient }, testInfo) => {
    if (testInfo.status === "failed") {
      await apiClient.get("/").catch(() => undefined);
    }
  });

  test("homepage responds successfully with HTML content and security headers", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/", {
      headers: { Accept: "text/html,application/xhtml+xml" },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/html");
    expect(response.headers()["cache-control"]).toBeTruthy();
    SECURITY_HEADERS.forEach((header) => {
      expect(response.headers()[header]).toBeTruthy();
    });
  });

  test("robots.txt is served with crawler directives", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/robots.txt");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/plain");
    const body = await response.text();
    expect(body).toContain("User-agent:");
    expect(body).toContain("Allow:");
  });

  test("sitemap URL resolves cleanly and returns XML content", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/sitemap.xml");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/xml");
    expect(response.url()).toContain("sitemap_index.xml");
    const body = await response.text();
    expect(body).toContain("<sitemapindex");
  });

  test("disability landing page responds successfully after redirect handling", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/disability");

    expect(response.status()).toBe(200);
    expect(response.url()).toContain("/disability/");
    const body = await response.text();
    expect(body.length).toBeGreaterThan(500);
    expect(body).toContain("<html");
  });

  test("health care landing page responds successfully", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/health-care");

    expect(response.status()).toBe(200);
    expect(response.url()).toContain("/health-care/");
    const body = await response.text();
    expect(body).toContain("<html");
  });

  test("education landing page responds successfully", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/education");

    expect(response.status()).toBe(200);
    expect(response.url()).toContain("/education/");
    const body = await response.text();
    expect(body).toContain("<html");
  });

  test("resources landing page responds successfully", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/resources");

    expect(response.status()).toBe(200);
    expect(response.url()).toContain("/resources/");
    const body = await response.text();
    expect(body).toContain("<html");
  });

  test("benefits landing page responds successfully", async ({ apiClient }) => {
    const response = await apiClient.get("/benefits");

    expect(response.status()).toBe(200);
    expect(response.url()).toContain("/benefits/");
    const body = await response.text();
    expect(body).toContain("<html");
  });

  test("unknown route returns a 404 instead of a server-side failure", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/definitely-not-a-real-page-123456");

    expect(response.status()).toBe(404);
    expect(response.headers()["content-type"]).toContain("text/html");
  });

  test("API responses include stable caching and anti-framing headers", async ({
    apiClient,
  }) => {
    const response = await apiClient.get("/health-care");

    expect(response.status()).toBe(200);
    expect(response.headers()["strict-transport-security"]).toContain(
      "max-age=31536000",
    );
    expect(response.headers()["x-frame-options"]).toBe("SAMEORIGIN");
    expect(response.headers()["cache-control"]).toBeTruthy();
  });
});
