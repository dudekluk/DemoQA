import { test, expect } from '@playwright/test';
import { NavigateWidgetsTab, ToolTips } from '../../pages/navigateWidgets.page';

test.describe('Testing tool tips', () => {
  let navigateAlertsTab: NavigateWidgetsTab;
  let toolTips: ToolTips;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateAlertsTab = new NavigateWidgetsTab(page);
      toolTips = new ToolTips(page);

      await page.goto('/');
    }
  );

  test('Test tool tip hover over button', async ({ page }) => {
    //Arrange
    const buttonHoverMessage = 'You hovered over the Button';

    //Act
    await navigateAlertsTab.openToolTipsTab();
    await toolTips.element.Button.hover();

    //Assert
    await expect(page.locator('.tooltip-inner')).toBeVisible();
    await expect(page.locator('.tooltip-inner')).toHaveText(buttonHoverMessage);
  });

  test('Test tool tip hover over input', async ({ page }) => {
    //Arrange
    const inputHoverMessage = 'You hovered over the text field';

    //Act
    await navigateAlertsTab.openToolTipsTab();
    await toolTips.element.Input.hover();

    //Assert
    await expect(page.locator('.tooltip-inner')).toBeVisible();
    await expect(page.locator('.tooltip-inner')).toHaveText(inputHoverMessage);
  });

  test('Test tool tip hover over text', async ({ page }) => {
    //Arrange
    const textnHoverMessage = 'You hovered over the Contrary';

    //Act
    await navigateAlertsTab.openToolTipsTab();
    await toolTips.element.Text.hover();

    //Assert
    await expect(page.locator('.tooltip-inner')).toBeVisible();
    await expect(page.locator('.tooltip-inner')).toHaveText(textnHoverMessage);
  });
});
