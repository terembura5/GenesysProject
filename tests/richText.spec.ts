import {expect, test} from '@playwright/test';
import RichTextPage from './pages/richText.page';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.onlinehtmleditor.dev');
});

test.describe('Rich text editor', () => {

    test('Test case 3: text format',async ({page}) => {
        const richTextPage = new RichTextPage(page);
        const boldButton = await richTextPage.boldButton;
        const underlineButton = await richTextPage.underlineButton;
        const editorElement = await (await richTextPage.editor).getByLabel('Editor, ckeditor-4-demo');

        await editorElement.waitFor();
        await editorElement.click();

        await boldButton.click();
        await editorElement.type('Automation');

        await boldButton.click();

        await underlineButton.click();
        await editorElement.type(' Test');

        await underlineButton.click();
        await editorElement.type(' Example');

        await expect(editorElement).toHaveText("Automation Test Example");
    });
});
