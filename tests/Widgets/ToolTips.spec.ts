import { test, expect } from '@playwright/test';
import { NavigateWidgets } from '../../pages/navigateWidgets.page';

test.describe('Testing tool tips', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test tool tip hover over button', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);
    const buttonHoverMessage = 'You hovered over the Button';

    //Act
    await navigateWidgets.openToolTipsTab();
    await navigateWidgets.toolTipButton.hover();

    //Assert
    await expect(page.locator('.tooltip-inner')).toBeVisible();
    await expect(page.locator('.tooltip-inner')).toHaveText(buttonHoverMessage);
  });

  test('Test tool tip hover over input', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);
    const inputHoverMessage = 'You hovered over the text field';

    //Act
    await navigateWidgets.openToolTipsTab();
    await navigateWidgets.toolTipInput.hover();

    //Assert
    await expect(page.locator('.tooltip-inner')).toBeVisible();
    await expect(page.locator('.tooltip-inner')).toHaveText(inputHoverMessage);
  });
  
  test('Test tool tip hover over text', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);
    const textnHoverMessage = 'You hovered over the Contrary';

    //Act
    await navigateWidgets.openToolTipsTab();
    await navigateWidgets.toolTipText.hover();

    //Assert
    await expect(page.locator('.tooltip-inner')).toBeVisible();
    await expect(page.locator('.tooltip-inner')).toHaveText(textnHoverMessage);
  });
});
