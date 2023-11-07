import { Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class SauceDemoPage extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    get username(): Promise<Locator>{
        return this.findLocator('[data-test="username"]');
    }

    get password(): Promise<Locator>{
        return this.findLocator('[data-test="password"]');
    }

    get loginButton(): Promise<Locator> {
        return this.findLocator('[data-test="login-button"]');
    }

    get errorMessage(): Promise<Locator> {
        return this.findLocator('[data-test="error"]');
    }

    get checkOut(): Promise<Locator> {
        return this.findLocator('[data-test="checkout"]');
    }

    get firstName(): Promise<Locator> {
        return this.findLocator('[data-test="firstName"]');
    }

    get lastName(): Promise<Locator> {
        return this.findLocator('[data-test="lastName"]');
    }

    get postalCode(): Promise<Locator> {
        return this.findLocator('[data-test="postalCode"]');
    }

    get shoppingCart(): Promise<Locator> {
        return this.findLocator('[id="shopping_cart_container"]');
    }

    get continue(): Promise<Locator> {
        return this.findLocator('[data-test="continue"]');
    }

    get finish(): Promise<Locator> {
        return this.findLocator('[data-test="finish"]');
    }

    get jacket(): Promise<Locator> {
        return this.findLocator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    get backpack(): Promise<Locator> {
        return this.findLocator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get footer(): Promise<Locator> {
        return this.findLocator('[class="footer_copy"]');
    }

    get productsHeader(): Promise<Locator> {
        return this.getByText('Products')
    }

    get thankYouForPurchaseText(): Promise<Locator> {
        return this.findLocator('[class="footer_copy"]');
    }

    public async login(username: string, passwordInput: string): Promise<void> {
        await (await this.username).fill(username);
        await (await this.password).fill(passwordInput);
        await (await this.loginButton).click();
    }

    public async navigateToCheckout(): Promise<void> {
        await (await this.checkOut).waitFor();
        await (await this.checkOut).click();
    }

    public async navigateToShoppingCart(): Promise<void> {
        await (await this.shoppingCart).click();
    }

    public async navigateToOverview(): Promise<void> {
        await (await this.continue).click();
    }

    public async finishPurchase(): Promise<void> {
        await (await this.finish).click();
    }

    public async fillShippingInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this._fillFirstName(firstName);
        await this._fillLastName(lastName);
        await this._fillPostalCode(postalCode);
    }

    private async _fillFirstName(firstName: string): Promise<void> {
        await (await this.firstName).click();
        await (await this.firstName).fill(firstName);
    }

    private async _fillLastName(lastName: string): Promise<void> {
        await (await this.lastName).click();
        await (await this.lastName).fill(lastName);
    }

    private async _fillPostalCode(postalCode: string): Promise<void> {
        await (await this.postalCode).click();
        await (await this.postalCode).fill(postalCode);
    }
}