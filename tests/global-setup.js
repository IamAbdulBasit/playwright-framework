import { chromium } from "@playwright/test";

async function globalSetup() {
    // open browser
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // go to website and perform login
    await page.goto('https://www.saucedemo.com/'); 
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // save authentication/logged-in state to 'auth.json'
    await page.context().storageState({ path: 'auth.json' });
    await browser.close();
}

export default globalSetup;