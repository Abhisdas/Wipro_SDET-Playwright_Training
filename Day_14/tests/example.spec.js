// @ts-check
import { test, expect } from '@playwright/test';

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
    expected: "Invalid2 credentials" //WILL FAIL (Backend actually sends "Invalid credentials")
  },
]
loginData.forEach(async data => {
  test(`Checking Login form with ${data.username}, ${data.password}`, async ({ page }) => {
    await page.goto('http://localhost:3000/login');
  
    const username = page.locator("#username");
    const password = page.locator("#password");
    const btn = page.locator("#loginBtn");
    const msg = page.locator("#msg");
  
    await username.fill(data.username);
    await password.fill(data.password);
    await btn.click();

    // await btn.screenshot({ type: 'png', path: 'btn.png'  });
    // await page.screenshot({ fullPage: true, path: 'full-page.png' })
    
    await expect(msg).toHaveText(data.expected);   //Playwright's await expect(msg).toHaveText(data.expected); line compares the actual message on the screen with what you told it to expect. If you provide an expected string that doesn't exactly match what the backend actually sends back, Playwright will flag it as a Failed Test.

  });
})