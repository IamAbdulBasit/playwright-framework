// یہاں test-fixtures استعمال کرو (نہ کہ playwright/test)
import { test, expect} from '../fixtures/test-fixtures.js';
import { testUsers } from '../utils/test-data.js'; 

test('User logs in successfully', async ({ page, loginPage }) => {
    // loginPage automatically available ہے (fixtures سے)
    await loginPage.open();
    await loginPage.login(testUsers.valid.username, testUsers.valid.password);
    await expect(page.locator('.inventory_list')).toBeVisible();
    await expect(page).toHaveURL(/.*inventory.html/);
});

test('User log in failed', async ({ page, loginPage }) => {
    // loginPage automatically available ہے (fixtures سے)
    await loginPage.open();
    await loginPage.login(testUsers.invalid.username, testUsers.invalid.password);
    await expect(page.locator('.error-message')).toBeVisible();
});