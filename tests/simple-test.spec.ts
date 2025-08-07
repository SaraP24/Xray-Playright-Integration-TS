import test, { expect } from "@playwright/test";

test('Google works', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});
