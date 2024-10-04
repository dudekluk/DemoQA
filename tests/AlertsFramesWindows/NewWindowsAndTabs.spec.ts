import { test, expect } from '@playwright/test';
import { navigatePageAlerts } from '../../pages/navigateAlerts.page';

test.describe('Testing new windows and new tabs', () => {
 
  let navigatePage: navigatePageAlerts
  
  test.beforeEach('Go to main page', async ({ page }) => {
     navigatePage = new navigatePageAlerts(page);
    await page.goto('/');
  });

  test('Test New tab', async ({ page, context }) => {
    //Arrange
  
    const message = 'This is a sample page';

    //Act
    await navigatePage.openBrowserWindowsMenu();
    const page2promisse = page.waitForEvent('popup');
    await navigatePage.newTabButton.click();
    const page2 = await page2promisse;

    //Assert
    await expect(page2.locator('#sampleHeading')).toContainText(message);
  });

  test('Test New window', async ({ page, context }) => {
    //Arrange

    const message = 'This is a sample page';

    //Act
    await navigatePage.openBrowserWindowsMenu();
    const window2Promiss = page.waitForEvent('popup');
    await navigatePage.newWindowButton.click();
    const window2 = await window2Promiss;
    //Assert
    await expect(window2.locator('#sampleHeading')).toContainText(message);
  });

  test('Test New window message', async ({ page, context }) => {
    //Arrange

    const message =
      'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.';

    //Act
    await navigatePage.openBrowserWindowsMenu();
    const window2Promiss = page.waitForEvent('popup');
    await navigatePage.newWindowMessageButton.click();
    const window2 = await window2Promiss;

    //Assert
    await expect(window2.locator('body')).toContainText(message);
  });
});


