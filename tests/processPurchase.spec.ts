import {expect, test} from '@playwright/test';
import {password, userName, standardUserName} from './resources/credential.json';
import SauceDemoPage from './pages/sauceDemo.page';

test.beforeEach(async ({page})=>{
    await page.goto('https://www.saucedemo.com/inventory.html');
});

test.describe('Sauce Demo page', () => {
    const expectedErrorMessage = 'Epic sadface: Username is required';
    const expectedCartNumber = '2';
    const expectedFooterTexts = {
        year: '2023',
        terms: 'Terms of Service'
    }

    test('Test Case 1: Shopping cart test + thank you for purchase test', async ({ page }) => {
        const sauceDemoPage = new SauceDemoPage(page);

        await sauceDemoPage.login(userName, password);
        await (await page.getByText('Products')).waitFor({state: "visible"});
        await (await sauceDemoPage.jacket).click();
        await (await sauceDemoPage.backpack).click();
        await expect(await page.locator('a').filter({ hasText: expectedCartNumber })).toBeVisible();
        await sauceDemoPage.navigateToShoppingCart();
        await sauceDemoPage.navigateToCheckout();
        await sauceDemoPage.fillShippingInfo();
        await sauceDemoPage.navigateToOverview();
        await sauceDemoPage.finishPurchase();
        await expect(page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible();
    });

    test('Test Case 2: Error message + footer element check',async ({ page }) => {
        const demoPage = new SauceDemoPage(page);

        await (await demoPage.loginButton).click();
        await (await demoPage.errorMessage).waitFor();
        await expect(await demoPage.errorMessage).toHaveText(expectedErrorMessage);
        await demoPage.login(standardUserName, password);
        await (await page.getByText('Products')).waitFor({state: "visible"});
        await page.mouse.wheel(0,4000);
        await expect(page.locator('[class="footer_copy"]')).toContainText(expectedFooterTexts.year);
        await expect(page.locator('[class="footer_copy"]')).toContainText(expectedFooterTexts.terms);
    })
});  
