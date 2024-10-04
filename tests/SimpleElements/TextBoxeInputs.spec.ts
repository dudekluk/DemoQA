import { test, expect } from '@playwright/test';
import {
  NavigateElementsTab,
  TextBoxes,
} from '../../pages/navigateElements.page';

test.describe('Testing text boxes inputs', () => {
  let navigateElementsTab: NavigateElementsTab;
  let textBoxes: TextBoxes;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateElementsTab = new NavigateElementsTab(page);
      textBoxes = new TextBoxes(page);

      await page.goto('/');
    }
  );

  test('Check correct text box inputs', async ({ page }) => {
    //Arrange

    const userName = 'Jan Kowal';
    const userEmail = 'JanKowal@wp.pl';
    const currentAddress = 'os. Centrum B 10/11';
    const permanentAddress = 'os. Centrum B 10/11';
    const message = `Name:${userName}Email:${userEmail}Current Address :${currentAddress} Permananet Address :${permanentAddress}`;

    //Act
    await navigateElementsTab.openTextBoxMenu();
    await textBoxes.inputBox.userName.fill(userName);
    await textBoxes.inputBox.email.fill(userEmail);
    await textBoxes.inputBox.currentAddress.fill(currentAddress);
    await textBoxes.inputBox.permanentAddress.fill(permanentAddress);
    await textBoxes.submitButton.click();

    //Assert
    await expect(
      page.getByText(`Name:${userName}Email:${userEmail}`)
    ).toContainText(message);
  });
});
