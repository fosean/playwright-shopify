import {test, expect} from "@playwright/test";

test.describe("HomePage", () => {
    test.beforeEach(async ({page})=> {
        await page.goto("https://www.shopify.com/ca");
    })
    test("main menu shown on home page", async ({page}) => {
        await expect(page.getByTestId("desktop-main-navigation")).toBeVisible();

        await expect(page.getByTestId("logo-home")).toBeVisible();
        await expect(page.getByTestId("shopify-logo")).toBeVisible()

        await expect(page.locator("#bk-nav-level1-items")).toBeVisible();
        await expect(
            page.locator(
                "#bk-nav-level1-items"
            ).getByText(
                'Why Shopify'
            )
        ).toBeVisible();
        await expect(
            page.locator(
                "#bk-nav-level1-items"
            ).getByText(
                'Why Shopify'
            )
        ).toBeVisible();
        await expect(
            page.locator(
                "#bk-nav-level1-items"
            ).getByText('Products', { exact: true }
            )
        ).toBeVisible();
        await expect(
            page.locator(
                "#bk-nav-level1-items"
            ).getByText('Pricing', { exact: true }
            )).toBeVisible();
        await expect(
            page.locator(
                "#bk-nav-level1-items"
            ).getByText('Enterprise', { exact: true }
            )).toBeVisible();

        const loginElement = page.getByTestId("login").filter({visible: true});
        await expect(loginElement).toBeVisible();

        await expect(
            page.locator(
                "#bk-nav-level1-items"
            ).getByTestId(
                "start-free-trial"
            )
        ).not.toBeVisible();

        await expect(
            page.getByRole(
                'navigation'
            ).getByRole(
                'link', { name: 'Start for free' }
            )).toBeVisible();
    })

    test("body shown on home page", async ({page}) => {
        await expect(page.getByTestId("hero")).toBeVisible();
        await expect(page.getByTestId("home-ab-section")).toBeVisible();
        await expect(page.getByTestId("home-agentic-section")).toBeVisible();
        await expect(page.getByTestId("home-unified-commerce-section")).toBeVisible();
        await expect(page.getByTestId("local-and-global")).toBeVisible();
        await expect(page.getByTestId("for-everyone")).toBeVisible();
        await expect(page.getByTestId("home-sidekick-section")).toBeVisible();
    })

    // test ("footer is shown on home page", async ({page}) => {
    //     await
    // })
    test("video modal appears", async ({page}) => {
        await expect(page.getByTestId("video-modal-pip-button")).toBeVisible();
    })
})

