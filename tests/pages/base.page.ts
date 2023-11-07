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
}