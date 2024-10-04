import { test, expect } from '@playwright/test';
import { NavigateWidgets } from '../../pages/navigateWidgets.page';


test.describe('Testing all the accordians', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test accordians content visibility', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);

    //Act
    await navigateWidgets.openAccordianMenu();
    
    //await navigateWidgets.firstAccordian.click();
    await expect.soft(page.locator('#section1Content')).toBeVisible();

    await navigateWidgets.secondAccordian.click();
    await expect.soft(page.locator('#section2Content')).toBeVisible();


    await navigateWidgets.thirdAccordian.click();
    await expect.soft(page.locator('#section3Content')).toBeVisible();
  });
});
