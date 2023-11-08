import { FrameLocator, Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class IFramePage extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    private get mainCookiePanel(): Promise<FrameLocator> {
        return this.findFrame('internal:role=dialog[name="Privacy Manager window"i]');
    }

    get hiddenImage(): Promise<FrameLocator> {
        return this.findFrame('iframe[name="a077aa5e"]');
    }

    get headerElement(): Promise<FrameLocator> {
        return this.findLocator('#rt-header');
    }

    get joinNowButton(): Promise<Locator> {
        return this.getButtonByName('Join Now');
    }

    get testingLink(): Promise<Locator> {
        return this.getLinkByName('Testing ');
    }

    get seleniumTutorialHeading(): Promise<Locator> {
        return this.getHeadingByName('Selenium Tutorial');
    }

    async getCookieElements(buttonName: string): Promise<Locator> {
        const cookie = await this.mainCookiePanel;
        const cookieElement = cookie.getByRole('button', { name: buttonName });
        return cookieElement;
    }

    async getHeaderElement(headerName: string): Promise<Locator> {
        const header = await this.headerElement;
        const exactHeaderElement = header.getByRole('link', { name: headerName, exact: true });
        return exactHeaderElement;
    }
}