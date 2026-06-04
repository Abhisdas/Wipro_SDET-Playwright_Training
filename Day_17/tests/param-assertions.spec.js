// @ts-check
import { test, expect } from '@playwright/test';

const searchData = [
  { searchTerm: 'Playwright', expectedTitle: 'Playwright' },
  { searchTerm: 'Testing', expectedTitle: 'Test' },
  { searchTerm: 'Automation', expectedTitle: 'Automation' },
];

test.describe('paramertized test', () => {
  test.beforeEach(async ({ page }) => await page.goto('https://en.wikipedia.org/wiki/Main_Page'));
  for(const item of searchData) {
    test.skip(`search for ${item.searchTerm}`, async ({ page }) => {
      await page.fill('input[name="search"]', item.searchTerm);
      await page.keyboard.press('Enter');

      await expect(page).toHaveTitle(new RegExp(item.expectedTitle, 'i'));
    })
  }
});

test.describe('soft assertions', () => {
  test.skip('soft', async ({ page }) => {
    await page.goto("https://example.com/");

    // line fail -> go to new line
    await expect.soft(page.locator('h1')).toHaveText('Example Domain1');
    await expect.soft(page.locator('p').first()).toBeVisible();
    console.log("hello");
  });
});

test('polling assertions', async ({ page }) => {
  let counter = 0;

  await expect.poll(async () => {
    counter++;
    return counter;
  }, {
    message: 'Counter did not reach 5',
    timeout: 5000,
  }).toBe(5);
})