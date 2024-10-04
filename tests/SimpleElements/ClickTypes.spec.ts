import { test, expect } from '@playwright/test';
import {
  ClickType,
  NavigateElementsTab,
} from '../../pages/navigateElements.page';

test.describe('Test button click types', () => {
  let navigateElementsTab: NavigateElementsTab;
  let clickType: ClickType;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateElementsTab = new NavigateElementsTab(page);
      clickType = new ClickType(page);

      await page.goto('/');
    }
  );
  test('Test different types of button clicks', async ({ page }) => {
    //Arrange

    const singleClickMessage = 'You have done a dynamic click';
    const doubleClickMessage = 'You have done a double click';
    const rightClickMessage = 'You have done a right click';

    //Act
    await navigateElementsTab.openButtonsMenu();
    await clickType.button.leftClick.click();
    await clickType.button.rightClick.click({ button: 'right' });
    await clickType.button.doubleClick.dblclick();

    //Assert
    await expect
      .soft(page.locator('#dynamicClickMessage'), 'Single click Failed')
      .toHaveText(singleClickMessage);
    await expect
      .soft(page.locator('#rightClickMessage'), 'Right click failed')
      .toHaveText(rightClickMessage);
    await expect
      .soft(page.locator('#doubleClickMessage'), 'Right click failed')
      .toHaveText(doubleClickMessage);
  });
});
