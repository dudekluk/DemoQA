import { test, expect } from '@playwright/test';
import {
  NavigateWidgetsTab,
  AutoComplete,
} from '../../pages/navigateWidgets.page';

test.describe('Testing auto complete funtion', () => {
  let navigateWidgetsTab: NavigateWidgetsTab;
  let autoComplete: AutoComplete;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateWidgetsTab = new NavigateWidgetsTab(page);
      autoComplete = new AutoComplete(page);
      await page.goto('/');
    }
  );

  test('Test multi pick auto complete', async ({ page }) => {
    //Arrange

    let elementsList;
    //Act
    await navigateWidgetsTab.openAutoCompletenMenu();
    await autoComplete.button.MultiChoice.click();
    await page.keyboard.press('a');
    await page.getByText('Black', { exact: true }).click();
    const val = page
      .locator('.css-1rhbuit-multiValue auto-complete__multi-value')
      .allInnerTexts();

    //Assert
  });
});
