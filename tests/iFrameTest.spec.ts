import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("https://demo.guru99.com/test/guru99home")
});

test.describe("iFrame and Tab test", () => {
    const expectedNewTabTitle = /Selenium Live Project: FREE Real Time Project for Practice/;

test('Test Case 4: iFrame and navigation test', async ({ page }) => {
    await page.frameLocator('internal:role=dialog[name="Privacy Manager window"i]').getByRole('button', {name: 'Reject All'}).click();
    await page.frameLocator('internal:role=dialog[name="Privacy Manager window"i]').getByRole('button', {name: 'Reject'}).click();
    const newTabPromise = page.waitForEvent('popup');
    await page.frameLocator('iframe[name="a077aa5e"]').locator('img').click();
    const newTab = await newTabPromise;
    await newTab.getByRole('button', {name: 'MORE OPTIONS'}).click();
    await newTab.getByRole('button', {name: 'SAVE & EXIT'}).click();
    await expect(newTab).toHaveTitle(expectedNewTabTitle);
    await newTab.close();
    await page.getByRole('link', { name: 'Testing ' }).hover();
    await page.locator('#rt-header').getByRole('link', {name: 'Selenium', exact: true }).click();
    await page.getByRole('heading', {name: 'Selenium Tutorial', exact: true}).waitFor();
    await page.mouse.wheel(0,4800);
    await expect(page.getByRole('button', {name: 'Join Now'})).toBeVisible({timeout: 20000});
});
});
