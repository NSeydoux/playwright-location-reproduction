import { test, expect } from "@playwright/test"

test("support cookies being set through redirects.", async ({ page }) => {
    await page.goto("http://localhost:8000/")
    await expect(page.getByTestId("hello")).toHaveText("Hello, new visitor.")
    await page.goto("http://localhost:8000/redirect");
    await expect(page).toHaveURL("http://localhost:8000/redirected");
    await expect(page.getByTestId("hello")).toHaveText("Welcome back, redirected visitor.")
})
