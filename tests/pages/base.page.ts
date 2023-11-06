import { Page } from "@playwright/test"
export default class BasePage {

    constructor(public page: Page){
    }

    public async findLocator(value: string){
        return this.page.locator(value);
    }
}