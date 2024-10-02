import { test, expect } from '@playwright/test';
import { navigatePageAlerts } from '../../pages/navigateAlerts.page';

test.describe('Testing alerts', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test simple alert', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const message = 'You clicked a button';
    let alertMessage;
    //Act
    page.on('dialog', async (dialog) => {
      console.log(dialog.message());
      alertMessage = dialog.message();
      await dialog.accept();
      // await dialog.dismiss();
    });

    await navigatePage.openAlertsMenu();
    await navigatePage.alertButton.click();

    //Assert
    await expect(alertMessage).toEqual(message);
  });

  test('Test alert with delay', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const message = 'This alert appeared after 5 seconds';
    let alertMessage;

    //Act
    page.on('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    navigatePage.openAlertsMenu();
    await navigatePage.alertTimerButton.click();
    await page.waitForTimeout(8000);

    //Assert
    await expect(alertMessage).toEqual(message);
  });

  test('Test alert with confirm action', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const message = 'Do you confirm action?';
    const confirmMessage = 'You selected Ok';
    let alertMessage;

    //Act
    page.on('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    await navigatePage.openAlertsMenu();
    await navigatePage.alertConfirmButton.click();

    //Assert
    await expect(alertMessage).toEqual(message);
    await expect(page.locator('#confirmResult')).toHaveText(confirmMessage);
  });
  test('Test alert with input action', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const messageInput = 'Jan Kowalski';
    const message = 'Please enter your name';
    const confirmMessage = `You entered ${messageInput}`;
    let alertMessage;

    //Act

    page.on('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept(messageInput);
    });

    await navigatePage.openAlertsMenu();
    await navigatePage.alertPromptButton.click();

    //Assert
    await expect(alertMessage).toEqual(message);
    await expect(page.locator('#promptResult')).toHaveText(confirmMessage);
  });
});
