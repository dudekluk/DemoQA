import { test, expect } from '@playwright/test';
import { NavigateWidgets } from '../../pages/navigateWidgets.page';
import { log } from 'console';

test.describe('Testing all the widges', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test full progress bar', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);

    //Act
    await navigateWidgets.openProgressBar();
    await navigateWidgets.progressBarButton.click();
    await page.waitForTimeout(20000);

    //Assert
    await expect(page.getByRole('progressbar')).toContainText('100%'); //Assert
  });

  test('Test reset full progress bar', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);

    //Act
    await navigateWidgets.openProgressBar();
    await navigateWidgets.progressBarButton.click();
    await page.waitForTimeout(20000);
    await navigateWidgets.progressBarResetButton.click();

    //Assert
    await expect(page.getByRole('progressbar')).toContainText('0%'); //Assert
  });
});
