export class LoginPage {

    constructor(page) {

        this.page = page;

        this.usernameInput = page.locator('input[name="username"]');

        this.passInput = page.locator('input[name="password"]');

        this.loginBtn = page.locator('button[type="submit"]');

    }

    async navigate() {

    await this.page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'commit',
            timeout: 60000
        }
    );

}

    async fillForm(email, pass) {

        await this.usernameInput.waitFor();

        await this.usernameInput.fill(email);

        await this.passInput.fill(pass);

    }

    async submit() {

        await this.loginBtn.click();

    }

}