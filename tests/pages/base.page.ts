import { FrameLocator, Locator, Page } from "@playwright/test"
export default class BasePage {

    constructor(public page: Page) {
    }

    public async findLocator(value: string): Promise<Locator> {
        return this.page.locator(value);
    }

    public async findFrame(value: string): Promise<FrameLocator> {
        return this.page.frameLocator(value);
    }

    public async getByText(value: string): Promise<Locator> {
        return this.page.getByText(value);
    }

    public async findLabel(value: string): Promise<Locator> {
        return this.page.getByLabel(value);
    }

    public async getButtonByName(buttonName: string): Promise<Locator> {
        return this.page.getByRole('button', { name: buttonName })
    }

    public async getLinkByName(linkName: string): Promise<Locator> {
        return this.page.getByRole('link', { name: linkName })
    }

    public async getHeadingByName(headingName: string): Promise<Locator> {
        return this.page.getByRole('heading', { name: headingName, exact: true })
    }
}