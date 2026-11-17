import {test, expect} from "@playwright/test";

test.describe("Sign Up Page", async () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://accounts.shopify.com/signup")
    })

    test("Sign up page appearance", async ({page}) => {
        await expect(page.getByRole("img", {name: "Shopify"})).toBeVisible();
        await expect(page.getByRole("heading", {name: "Start your free trial", exact: true})).toBeVisible();
        await expect(
            page.getByRole(
                "heading", {name: "3 days free, then 3 months for $1/month", exact: true}
            )
        ).toBeVisible();
        await expect(page.getByRole("textbox", {name: "Email address"})).toBeVisible();
        await expect(page.getByRole("button", {name: "Continue with email", exact: true})).toBeVisible();
        await expect(page.getByRole("link", {name: "Continue with Google"})).toBeVisible()
        await expect(page.getByRole("link", {name: "Continue with Apple"})).toBeVisible();
        await expect(page.getByRole("link", {name: "Continue with WhatsApp"})).toBeVisible();
        await expect(page.getByText('Already have a Shopify')).toBeVisible()
        await expect(page.getByRole("link", {name: "Log in", exact: true})).toBeVisible();
    })
})