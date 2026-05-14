import { test, expect } from "@playwright/test";

test('check title', async ({ page }) => {
    await page.goto("https://www.techxincorporation.com/");

    // const texhXHeading = page.locator('//*[@id="root"]/header/div/a[1]/span[1]');
    // console.log(texhXHeading);

     
    const consultBtn = page.getByRole("link", { name: /Request/ }).nth(1); 
    // [top bar result, main page result] --> [0, 1] --> 1
    await consultBtn.click();
    expect(page.url()).toBe("https://www.techxincorporation.com/contact");
});