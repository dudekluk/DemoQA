import { test, expect } from '@playwright/test';
import {
  NavigateAlertsTab,
  SimpleAlert,
} from '../../pages/navigateAlerts.page';

test.describe('Testing simple alerts', () => {
  let navigateElementsTab: NavigateAlertsTab;
  let simpleAlert: SimpleAlert;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      await page.goto('/');
      navigateElementsTab = new NavigateAlertsTab(page);
      simpleAlert = new SimpleAlert(page);
    }
  );

  test('Test simple alert', async ({ page }) => {
    //Arrange
    const message = 'You clicked a button';
    let alertMessage;

    //Act
    page.on('dialog', async (dialog) => {
      console.log(dialog.message());
      alertMessage = dialog.message();
      await dialog.accept();
      // await dialog.dismiss();
    });

    await navigateElementsTab.openAlertsMenu();
    await simpleAlert.button.Alert.click();

    //Assert
    await expect(alertMessage).toEqual(message);
  });

  test('Test alert with delay', async ({ page }) => {
    //Arrange
    const message = 'This alert appeared after 5 seconds';
    let alertMessage;

    //Act
    page.on('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    await navigateElementsTab.openAlertsMenu();
    await simpleAlert.button.Timer.click();
    await page.waitForTimeout(8000);

    //Assert
    await expect(alertMessage).toEqual(message);
  });

  test('Test alert with confirm action', async ({ page }) => {
    //Arrange
    const message = 'Do you confirm action?';
    const confirmMessage = 'You selected Ok';
    let alertMessage;

    //Act
    page.on('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    await navigateElementsTab.openAlertsMenu();
    await simpleAlert.button.Confirm.click();

    //Assert
    await expect(alertMessage).toEqual(message);
    await expect(page.locator('#confirmResult')).toHaveText(confirmMessage);
  });
  test('Test alert with input action', async ({ page }) => {
    //Arrange

    const messageInput = 'Jan Kowalski';
    const message = 'Please enter your name';
    const confirmMessage = `You entered ${messageInput}`;
    let alertMessage;

    //Act

    page.on('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept(messageInput);
    });

    await navigateElementsTab.openAlertsMenu();
    await simpleAlert.button.Prompt.click();

    //Assert
    await expect(alertMessage).toEqual(message);
    await expect(page.locator('#promptResult')).toHaveText(confirmMessage);
  });
});
