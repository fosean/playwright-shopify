import {test, expect} from "@playwright/test";

test.describe("HomePage", () => {
    test.beforeEach(async ({page})=> {
        await page.goto("https://www.shopify.com/ca");
    })
    test("test main menu navigation", async ({page}) => {
        await expect(page.getByTestId("desktop-main-navigation")).toBeVisible();
        await expect(
            page.getByRole(
                'navigation'
            ).getByRole(
                'link', { name: 'Start for free' }
            )).toBeVisible();
    })
})

