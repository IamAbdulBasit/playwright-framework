import { test, expect} from '../fixtures/test-fixtures.js';
import { testUsers } from '../utils/test-data.js'; 

test('User logs in successfully', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.login(testUsers.valid.username, testUsers.valid.password);
    await expect(page.locator('.inventory_list')).toBeVisible();
    await expect(page).toHaveURL(/.*inventory.html/);
});