import test, { expect } from "playwright/test";

test('J79 | basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test('J80 | basic test 2', async ({ page }) => {
throw new Error('This test is intentionally failing');
});