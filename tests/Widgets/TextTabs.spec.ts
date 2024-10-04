import { test, expect } from '@playwright/test';
import { NavigateWidgets } from '../../pages/navigateWidgets.page';
import exp from 'constants';

test.describe('Testing text tabs', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Check active and disabled tabs', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);

    //Act
    await navigateWidgets.openTextTabs();

    //Assert
    await expect.soft(navigateWidgets.tabOriginButton).not.toBeDisabled();
    await expect.soft(navigateWidgets.tabUseButton).not.toBeDisabled();
    await expect.soft(navigateWidgets.tabWhatButton).not.toBeDisabled();
    await expect.soft(navigateWidgets.tabMoreButton).toBeDisabled();
  });

  test('Test switching tabs', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);

    //Act
    await navigateWidgets.openTextTabs();

    //Assert
    await navigateWidgets.tabOriginButton.click();
    await expect.soft(navigateWidgets.tabOriginButton).toBeFocused();

    await navigateWidgets.tabUseButton.click();
    await expect.soft(navigateWidgets.tabUseButton).toBeFocused();

    await navigateWidgets.tabWhatButton.click();
    await expect.soft(navigateWidgets.tabWhatButton).toBeFocused();
  });
});
