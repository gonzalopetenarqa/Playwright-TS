
import { test, expect } from '@playwright/test';

test('purchase an item', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('textbox',{name:'Username'}).fill('standard_user')
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click()
    await page.locator('[name="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('[name="remove-sauce-labs-backpack"]').innerText()
    await page.locator(".shopping_cart_link").click()
    await page.locator('.title').innerText()




    
    await page.pause()

    



});