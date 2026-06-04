import { test, expect } from "@playwright/test";
import { LoginPage } from "../POM/loginPage";

test.describe('Login tests', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Login with valid credentials', async ({ page }) => {

        await loginPage.fillForm('admin', 'admin123');

        await loginPage.submit();

        await expect(page).toHaveURL(/dashboard/);

    });

    test('Login with invalid credentials', async ({ page }) => {

        await loginPage.fillForm('admin', 'wrongpassword');

        await loginPage.submit();

        await expect(page.locator('.oxd-alert-content-text'))
            .toContainText('Invalid credentials');

    });

});