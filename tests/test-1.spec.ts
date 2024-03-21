import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'Argentina' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('papas fritas lays');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('link', { name: 'Papas Fritas Lays Clásicas X 134 Gr | Cumpleaños Picadas' }).click();
  await page.getByRole('img', { name: 'Papas Fritas Lays Clásicas X' }).nth(1).click();
  await page.getByRole('img', { name: 'Papas Fritas Lays Clásicas X' }).nth(2).click();
  await page.getByRole('button', { name: 'Ver 4 resultados más' }).click();
});