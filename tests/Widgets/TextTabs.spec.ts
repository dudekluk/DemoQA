import { test, expect } from '@playwright/test';
import { NavigateWidgetsTab, Tab } from '../../pages/navigateWidgets.page';

test.describe('Testing text tabs', () => {
  let navigateAlertsTab: NavigateWidgetsTab;
  let tab: Tab;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateAlertsTab = new NavigateWidgetsTab(page);
      tab = new Tab(page);

      await page.goto('/');
    }
  );

  test('Check active and disabled tabs', async ({ page }) => {
    //Arrange

    //Act
    await navigateAlertsTab.openTextTabs();

    //Assert
    await expect.soft(tab.button.Origin).not.toBeDisabled();
    await expect.soft(tab.button.Use).not.toBeDisabled();
    await expect.soft(tab.button.What).not.toBeDisabled();
    await expect.soft(tab.button.More).toBeDisabled();
  });

  test('Test switching tabs', async ({ page }) => {
    //Arrange

    //Act
    await navigateAlertsTab.openTextTabs();

    //Assert
    await tab.button.Origin.click();
    await expect.soft(tab.button.Origin).toBeFocused();

    await tab.button.Use.click();
    await expect.soft(tab.button.Use).toBeFocused();

    await tab.button.What.click();
    await expect.soft(tab.button.What).toBeFocused();
  });
});
