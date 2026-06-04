const { test: base, expect } = require('@playwright/test');

const test = base.extend({
  preparedPage: async ({ page }, use) => {
    await page.goto('http://localhost:3000');

    // imagine closing some ads...
    await use(page);
  }
});

// goto -> page [ads popup, promotion banner, forms popup] --> close them --> exec test cases

test.describe.configure({ mode: 'parallel' })

test.describe('Parallel fixtures execution', () => {
  test.skip('Test 1 running in parallel', async ({ preparedPage }) => {
    // preparedPage already went to the URL because of our fixture!
    await expect(preparedPage.getByText('Get started')).toBeVisible();
  });
  test.skip('Test 2 running in parallel', async ({ preparedPage }) => {
    await preparedPage.getByRole('link', { name: 'Get started' }).click();
    await expect(preparedPage.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
})