import { test, expect } from '@playwright/test';
import {
  NavigateAlertsTab,
  WindowAndTab,
} from '../../pages/navigateAlerts.page';

test.describe('Testing new windows and new tabs', () => {
  let navigateAlertsTab: NavigateAlertsTab;
  let windowAndTab: WindowAndTab;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateAlertsTab = new NavigateAlertsTab(page);
      windowAndTab = new WindowAndTab(page);

      await page.goto('/');
    }
  );

  test('Test New tab', async ({ page, context }) => {
    //Arrange
    const message = 'This is a sample page';

    //Act
    await navigateAlertsTab.openBrowserWindowsMenu();
    const secondPagePromiss = page.waitForEvent('popup');
    await windowAndTab.button.newTab.click();
    const secondPage = await secondPagePromiss;

    //Assert
    await expect(secondPage.locator('#sampleHeading')).toContainText(message);
  });

  test('Test New window', async ({ page, context }) => {
    //Arrange
    const message = 'This is a sample page';

    //Act
    await navigateAlertsTab.openBrowserWindowsMenu();
    const secondWindowPromiss = page.waitForEvent('popup');
    await windowAndTab.button.newWindow.click();
    const secondWindow = await secondWindowPromiss;
    //Assert
    await expect(secondWindow.locator('#sampleHeading')).toContainText(message);
  });

  test('Test New window message', async ({ page, context }) => {
    //Arrange
    const message =
      'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.';

    //Act
    await navigateAlertsTab.openBrowserWindowsMenu();
    const secondWindowPromiss = page.waitForEvent('popup');
    await windowAndTab.button.newWindowMessage.click();
    const secondWindow = await secondWindowPromiss;

    //Assert
    await expect(secondWindow.locator('body')).toContainText(message);
  });
});
