import { test, expect } from '@playwright/test';

test('locations', async ({page}) =>{
    await page.goto('https://www.mercadolibre.com.ar')
    //await page.getByRole('link',{name:'Mis compras'}).click()
    await page.getByRole('link',{name:'Ingresá', exact: true}).click()
    await page.pause()
})