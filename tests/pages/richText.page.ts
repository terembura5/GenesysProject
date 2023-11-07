import { FrameLocator, Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class RichTextPage extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    get editor(): Promise<FrameLocator>{
        return this.findFrame('iframe[title="Editor\\, ckeditor-4-demo"]');
    }

    get boldButton(): Promise<Locator>{
        return this.findLabel('Bold');
    }

    get underlineButton(): Promise<Locator>{
        return this.findLabel('Underline');
    }
}