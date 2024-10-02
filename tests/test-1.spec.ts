import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div:nth-child(3) > div > .avatar > svg').click();
  await page.locator('span').filter({ hasText: 'Widgets' }).locator('div').first().click();
  await page.locator('li').filter({ hasText: 'Slider' }).click();
  await page.getByRole('slider').fill('35');
});