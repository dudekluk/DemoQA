import { test, expect } from '@playwright/test';
import { navigatePageAlerts } from '../../pages/navigateAlerts.page';
import { url } from 'inspector';

test.describe('Testing frames', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test small frame', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const message = 'This is a sample page';
    const firstFrame = page.frameLocator('#frame1');

    //Act
    await navigatePage.openFramesMenu();

    //Assert
    expect(firstFrame.locator('#sampleHeading')).toHaveText(message);
  });

  test('Test big frame', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const message = 'This is a sample page';
    const secondFrame = page.frameLocator('#frame2');

    //Act
    await navigatePage.openFramesMenu();

    //Assert
    expect(secondFrame.locator('#sampleHeading')).toHaveText(message);
  });

  test('Test nested frames', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const messageParent = 'Parent frame';
    const messageChild = 'Child Iframe';
    const firstFrame = page.frameLocator('#frame1');
    const insideFrame = page
      .frameLocator('#frame1')
      .locator('iframe[srcdoc="<p>Child Iframe</p>"]');
    const insideFrameContent = insideFrame.contentFrame();

    //Act
    await navigatePage.openNestedFramesMenu();

    //Assert
    expect.soft(firstFrame.locator('body')).toHaveText(messageParent);
    expect.soft(insideFrameContent.locator('p')).toContainText(messageChild);
  });
});
