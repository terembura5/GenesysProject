import { FrameLocator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class IFramePage extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    get mainCookiePanel(): Promise<FrameLocator> {
        return this.findFrame('internal:role=dialog[name="Privacy Manager window"i]');
    }

    get hiddenImage(): Promise<FrameLocator> {
        return this.findFrame('iframe[name="a077aa5e"]');
    }

    get headerElement(): Promise<FrameLocator> {
        return this.findLocator('#rt-header');
    }
}