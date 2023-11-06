import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.onlinehtmleditor.dev');
});

test.describe('Rich text editor', () => {

    test('Test case 3: text format',async ({page}) => {
        const editorElement = await page.frameLocator('iframe[title="Editor\\, ckeditor-4-demo"]').getByLabel('Editor, ckeditor-4-demo');

        await editorElement.waitFor();
        await editorElement.click();
        await page.getByLabel('Bold').click();
        await editorElement.type('Automation');
        await page.getByLabel('Bold').click();
        await page.getByLabel('Italic').click();
        await editorElement.type(' Test');
        await page.getByLabel('Italic').click();
        await editorElement.type(' Example');
        await expect(editorElement).toHaveText("Automation Test Example");
    })
})