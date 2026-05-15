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
    expected: "Invalid credentials"
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
    
    await expect(msg).toHaveText(data.expected);
  });
})