import { test, expect } from '@playwright/test';
import {
  NavigateElementsTab,
  RadioButtons,
} from '../../pages/navigateElements.page';

test.describe('Testing radio buttons', () => {
  let navigateElementsTab: NavigateElementsTab;
  let radioButtons: RadioButtons;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements ',
    async ({ page }) => {
      navigateElementsTab = new NavigateElementsTab(page);
      radioButtons = new RadioButtons(page);
      await page.goto('/');
    }
  );

  test('Check Yes radio button', async ({ page }) => {
    //Arrange
    const message = 'You have selected Yes';

    //Act
    await navigateElementsTab.openRadioButtonMenu();
    await radioButtons.button.yes.click();

    //Assert
    await expect(page.getByText(message)).toHaveText(message);
  });

  test('Check Impressive radio button', async ({ page }) => {
    //Arrange
    const message = 'You have selected Impressive';

    //Act
    await navigateElementsTab.openRadioButtonMenu();
    await radioButtons.button.impressive.click();

    //Assert
    await expect(page.getByText(message)).toHaveText(message);
  });

  test('Check if No radio button is disabled', async ({ page }) => {
    //Arrange

    //Act
    await navigateElementsTab.openRadioButtonMenu();

    //Assert
    await expect(radioButtons.button.no).toBeDisabled();
  });
});
