import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://www.ebay.com/")
  await page.getByRole('combobox', { name: 'Search for anything' }).click();
  await page.getByRole('combobox', { name: 'Search for anything' }).fill('wallet');
  await page.getByRole('button', { name: 'Search', exact: true }).click();


});
