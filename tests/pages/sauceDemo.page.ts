import { Page } from "@playwright/test";
import BasePage from "./base.page";

export default class SauceDemoPage extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    get username() {
        return this.findLocator('[data-test="username"]');
    }

    get password() {
        return this.findLocator('[data-test="password"]');
    }

    get loginButton() {
        return this.findLocator('[data-test="login-button"]');
    }

    get errorMessage() {
        return this.findLocator('[data-test="error"]');
    }

    get checkOut() {
        return this.findLocator('[data-test="checkout"]');
    }

    get firstName() {
        return this.findLocator('[data-test="firstName"]');
    }

    get lastName() {
        return this.findLocator('[data-test="lastName"]');
    }

    get postalCode() {
        return this.findLocator('[data-test="postalCode"]');
    }

    get shoppingCart() {
        return this.findLocator('[id="shopping_cart_container"]');
    }

    get continue() {
        return this.findLocator('[data-test="continue"]');
    }

    get finish() {
        return this.findLocator('[data-test="finish"]');
    }

    get jacket() {
        return this.findLocator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    get backpack() {
        return this.findLocator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    public async login(username: string, passwordInput: string) {
        await (await this.username).fill(username);
        await (await this.password).fill(passwordInput);
        await (await this.loginButton).click();
    }

    public async navigateToCheckout() {
        await (await this.checkOut).waitFor();
        await (await this.checkOut).click();
    }

    public async navigateToShoppingCart() {
        await (await this.shoppingCart).click();
    }

    public async navigateToOverview() {
        await (await this.continue).click();
    }

    public async finishPurchase() {
        await (await this.finish).click();
    }

    public async fillShippingInfo(firstName = 'test', lastName = 'test', postalCode = '1000') {
        await (await this.firstName).click();
        await (await this.firstName).fill(firstName);
        await (await this.lastName).click();
        await (await this.lastName).fill(lastName);
        await (await this.postalCode).click();
        await (await this.postalCode).fill(postalCode);
    }
}