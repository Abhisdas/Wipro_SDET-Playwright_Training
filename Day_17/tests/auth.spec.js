// @ts-check
import { test, expect } from '@playwright/test';

test.describe('auth management', () => {

  test.describe.configure({ mode: "serial" });

  test('1. login & save state', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    // save cookies & local storage to a file (json)
    await page.context().storageState({ path: 'playwright/.auth/user.json' });
  });

  test.describe('Test require login', () => {
    test.use({ storageState: 'playwright/.auth/user.json' });

    test('2. Verify secure area', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/secure');
        await expect(page.locator('h2')).toContainText('Secure Area');
    });
  });
});