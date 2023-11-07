import { expect, test } from '@playwright/test';
import IFramePage from './pages/iFrame.page';

test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.guru99.com/test/guru99home")
});

test.describe("iFrame and Tab test", () => {
    const expectedNewTabTitle = /Selenium Live Project: FREE Real Time Project for Practice/;

    test('Test Case 4: iFrame and navigation test', async ({ page }) => {
        const iFramePage = new IFramePage(page);

        await (await iFramePage.rejectAll).click();
        await (await iFramePage.reject).click();

        const newTabPromise = page.waitForEvent('popup');

        await (await iFramePage.hiddenImage).locator('img').click();

        const newTab = await newTabPromise;
        await newTab.getByRole('button', { name: 'MORE OPTIONS' }).click();
        await newTab.getByRole('button', { name: 'SAVE & EXIT' }).click();

        await expect(newTab).toHaveTitle(expectedNewTabTitle);

        await newTab.close();

        await page.getByRole('link', { name: 'Testing ' }).hover();
        await (await iFramePage.headerElement).getByRole('link', { name: 'Selenium', exact: true }).click();
        await page.getByRole('heading', { name: 'Selenium Tutorial', exact: true }).waitFor();
        await page.mouse.wheel(0, 4800);

        await expect(await iFramePage.joinNowButton).toBeVisible({ timeout: 20000 });
    });
});
