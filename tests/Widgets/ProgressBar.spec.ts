import { test, expect } from '@playwright/test';
import {
  NavigateWidgetsTab,
  ProgressBar,
} from '../../pages/navigateWidgets.page';

test.describe('Test progress bar', () => {
  let navigateAlertsTab: NavigateWidgetsTab;
  let progressBar: ProgressBar;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateAlertsTab = new NavigateWidgetsTab(page);
      progressBar = new ProgressBar(page);

      await page.goto('/');
    }
  );

  test('Test full progress bar', async ({ page }) => {
    //Arrange

    //Act
    await navigateAlertsTab.openProgressBar();
    await progressBar.button.ProgressBar.click();
    await page.waitForTimeout(20000);

    //Assert
    await expect(page.getByRole('progressbar')).toContainText('100%'); //Assert
  });

  test('Test reset full progress bar', async ({ page }) => {
    //Arrange

    //Act
    await navigateAlertsTab.openProgressBar();
    await progressBar.button.ProgressBar.click();
    await page.waitForTimeout(20000);
    await progressBar.button.ProgressBarReset.click();

    //Assert
    await expect(page.getByRole('progressbar')).toContainText('0%'); //Assert
  });
});
