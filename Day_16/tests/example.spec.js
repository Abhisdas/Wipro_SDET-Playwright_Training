// @ts-check
import { test, expect } from '@playwright/test';

test.describe('testing index.html', async () => {
  // test.beforeAll(async () => {
  //   console.log("Before all test cases this block got executed")
  // });

  test.beforeEach(async ({ page }) =>
    await page.goto('http://localhost:3000/index.html')
  );

  test('handle alert', async ({ page }) => {
    const btn = page.locator('#alertbtn');
    await btn.click();

    // handle dialog box
    page.on('dialog', dialog => {
      expect(dialog.message()).toBe('Hello');
      dialog.accept(); // ok
    })
  });

  test('check home title', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Home' });

    await expect(heading).toBeVisible();
  });

  // test.afterAll(() => console.log("done!"))

  // test.afterEach(() => console.log("done moew meow"))
});

test.describe('testing login form', () => {
  test.beforeEach(async ({ page }) =>
    await page.goto('http://localhost:3000/login.html')
  );

  const loginData = [
    {
      username: "tom",
      password: "tom",
      expected: "Username length must be greater than 3 & Password 5"
    }, {
      username: "tom123",
      password: "tom",
      expected: "Username length must be greater than 3 & Password 5"
    }, {
      username: "admin123",
      password: "admin123",
      expected: "Login successful"
    }, {
      username: "admin123",
      password: "admin12345",
      expected: "Invalid credentials"
    }
  ]
  loginData.forEach(async data => {
    test(`Checking Login form with ${data.username}, ${data.password}`, async ({ page }) => {
      const username = page.locator("#username");
      const password = page.locator("#password");
      const btn = page.locator("#loginBtn");
      const msg = page.locator("#msg");

      await username.fill(data.username);
      await password.fill(data.password);
      await btn.click();
      await expect(msg).toHaveText(data.expected);
    });
  })
})