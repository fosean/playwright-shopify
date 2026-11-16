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
        await expect(page.getByTestId("data-localglobal-section")).toBeVisible();
        await expect(page.getByTestId("home-foreveryone-section")).toBeVisible();
        await expect(page.getByTestId("home-sidekick-section")).toBeVisible();
        await expect(page.getByTestId("home-apps-section")).toBeVisible();
        await expect(page.getByTestId("home-dev-section")).toBeVisible();
        await expect(page.getByTestId("home-heading-section")).toBeVisible();
        await expect(page.getByTestId("home-stats-section")).toBeVisible();
        await expect(page.getByTestId("home-rocksteady-section")).toBeVisible();
        await expect(page.getByTestId("home-capital-section")).toBeVisible();
        await expect(page.getByTestId("home-conversion-section")).toBeVisible();

    })

    test ("footer is shown on home page", async ({page}) => {
        await expect(page.getByRole("link", { name: "Back to the top" })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Shopify", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "What is Shopify?", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Shopify Editions", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Careers", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Investors", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Newsroom", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Sustainability", exact:true })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Ecosystem", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Developer Docs", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Theme Store", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "App Store", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Partners", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Affiliates", exact:true })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Resources", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Blog", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Compare Shopify", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Guides", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Free Tools", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Changelog", exact:true })).toBeVisible();

        await expect(page.getByRole("heading", { name: "Support", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Shopify Help Center", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Community Forum", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Hire a Partner", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Service Status", exact:true })).toBeVisible();

        await expect(page.getByTestId("regions")).toBeVisible();
        await expect(page.getByRole("link", { name: "Terms of Service", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Legal", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Privacy Policy", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Sitemap", exact:true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Your Privacy Choices" })).toBeVisible();

        await expect(page.getByRole("link", {name: "External source: Facebook ("})).toBeVisible();
        await expect(page.getByRole("link", {name: "External source: Twitter ("})).toBeVisible();
        await expect(page.getByRole("link", {name: "External source: YouTube ("})).toBeVisible();
        await expect(page.getByRole("link", {name: "External source: Instagram ("})).toBeVisible();
        await expect(page.getByRole("link", {name: "External source: TikTok ("})).toBeVisible();
        await expect(page.getByRole("link", {name: "External source: LinkedIn ("})).toBeVisible();
        await expect(page.getByRole("link", {name: "External source: Pinterest ("})).toBeVisible();
    })

    test("video modal appears", async ({page}) => {
        await expect(page.getByTestId("video-modal-pip-button")).toBeVisible();
    })
})

