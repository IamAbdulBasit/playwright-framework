import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

// Custom fixture - Extend the base test to include the LoginPage fixture
export const test = baseTest.extend({
    // loginPage: یہ ہر test میں automatically available ہوگا
    loginPage: async ({ page }, use) => {
        // ہر test سے پہلے LoginPage کو initialize کرو
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});

export { expect } from '@playwright/test';

/* GLOBAL HOOKS */
test.beforeEach(async ({ page }) => {
    console.log('➡️ Test started');
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
    }
    console.log('⬅️ Test finished');
});