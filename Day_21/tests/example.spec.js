// @ts-check
import { test, expect } from '@playwright/test';

test.describe('jio mart test', () => {

  test('search for fruits', async ({ page }) => {

    await page.goto('https://www.jiomart.com/sections/low-price-mumbai');

    // Search input
    const input = page.locator('//*[@id="app"]/div/div[3]/header/div[1]/div/div[2]/div[1]/div/div[2]/input');

    await input.click();

    await input.fill('fruits');

    await input.press('Enter');

    await expect(page.getByText('fruits').first()).toBeVisible();

  });

  test('homepage test', async ({ page }) => {

    await page.goto('https://www.jiomart.com/');

    await expect(page).toHaveTitle(/JioMart/);

  });

});