import { test, expect } from '@playwright/test';
import { NavigateAlertsTab } from '../../pages/navigateAlerts.page';

test.describe('Testing frames', () => {
  let navigateAlertsTab: NavigateAlertsTab;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateAlertsTab = new NavigateAlertsTab(page);
      await page.goto('/');
    }
  );

  test('Test small frame', async ({ page }) => {
    //Arrange
    const message = 'This is a sample page';
    const firstFrame = page.frameLocator('#frame1');

    //Act
    await navigateAlertsTab.openFramesMenu();

    //Assert
    expect(firstFrame.locator('#sampleHeading')).toHaveText(message);
  });

  test('Test big frame', async ({ page }) => {
    //Arrange
    const message = 'This is a sample page';
    const secondFrame = page.frameLocator('#frame2');

    //Act
    await navigateAlertsTab.openFramesMenu();

    //Assert
    expect(secondFrame.locator('#sampleHeading')).toHaveText(message);
  });

  test('Test nested frames', async ({ page }) => {
    //Arrange
    const messageParent = 'Parent frame';
    const messageChild = 'Child Iframe';
    const firstFrame = page.frameLocator('#frame1');
    const insideFrame = page
      .frameLocator('#frame1')
      .locator('iframe[srcdoc="<p>Child Iframe</p>"]');
    const insideFrameContent = insideFrame.contentFrame();

    //Act
    await navigateAlertsTab.openNestedFramesMenu();

    //Assert
    expect.soft(firstFrame.locator('body')).toHaveText(messageParent);
    expect.soft(insideFrameContent.locator('p')).toContainText(messageChild);
  });
});
