import { test, expect } from '@playwright/test';
import { NavigatePage } from '../pages/navigate.page';
import exp from 'constants';

test.describe('Element page tests', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    //const url = 'https://demoqa.com/';
    await page.goto('/');
  });

  test('Test elements Text Box correct data', async ({ page }) => {
    //Arrange
    const navigatePage = new NavigatePage(page);
    const userName = 'Jan Kowal';
    const userEmail = 'JanKowal@wp.pl';
    const currentAddress = 'os. Centrum B 10/11';
    const permanentAddress = 'os. Centrum B 10/11';
    const message = `Name:${userName}Email:${userEmail}Current Address :${currentAddress} Permananet Address :${permanentAddress}`;
    //Act
    await navigatePage.openTextBoxMenu();

    await navigatePage.textBoxUserName.fill(userName);
    await navigatePage.textBoxEmail.fill(userEmail);
    await navigatePage.textBoxCurrentAddress.fill(currentAddress);
    await navigatePage.textBoxPermanentAddress.fill(permanentAddress);
    await navigatePage.textBoxSubmitButton.click();

    //Assert

    await expect(
      page.getByText(`Name:${userName}Email:${userEmail}`)
    ).toContainText(message);
  });

  test('Test Check boxs', async ({ page }) => {
    //Arrange
    const navigatePage = new NavigatePage(page);

    //Act
    await navigatePage.openCheckBoxMenu();

    //Assert
  });

  test('Test Yes radio button', async ({ page }) => {
    //Arrange
    const navigatePage = new NavigatePage(page);
    const message = 'You have selected Yes';

    //Act
    await navigatePage.openRadioButtonMenu();
    await navigatePage.yesRadioButton.click();

    //Assert
    await expect(page.getByText(message)).toHaveText(message);

  });

  test('Test Impressive radio button', async ({ page }) => {
    //Arrange
    const navigatePage = new NavigatePage(page);
    const message = 'You have selected Impressive';

    //Act
    await navigatePage.openRadioButtonMenu();
    await navigatePage.impressiveRadioButton.click();

    //Assert
    await expect(page.getByText(message)).toHaveText(message);
  });
  test('Check if No radio buttonis disabled', async ({ page }) => {
    //Arrange
    const navigatePage = new NavigatePage(page);

    //Act
    await navigatePage.openRadioButtonMenu();

    //Assert
    await expect(navigatePage.noRadioButton).toBeDisabled();
  });

  test('Test different types of button clicks', async ({ page }) => {
    //Arrange
    const navigatePage = new NavigatePage(page);
    const message = 'You have selected Impressive';

    //Act
    await navigatePage.openButtonsMenu();
    await navigatePage.clickButton.click();
    await navigatePage.rightClickButton.click({ button: 'right' });
    await navigatePage.doubleClickButton.dblclick();

    //Assert

    await expect
      .soft(
        page.getByText('You have done a dynamic click'),
        'Dynamic click failed'
      )
      .toBeVisible();
    await expect
      .soft(page.getByText('You have done a right click'), 'Right click failed')
      .toBeVisible();
    await expect
      .soft(
        page.getByText('You have done a double click'),
        'Double click failed'
      )
      .toBeVisible();
  });
});

test.describe.only('Random tests', () => {
  test.beforeEach('s', async ({ page }) => {
    await page.goto('/');
  });
  test('Test different types of button clicks', async ({ page }) => {
    //Arrange
    const navigatePage = new NavigatePage(page);

    //Act
    await navigatePage.openTextBoxMenu();
    await navigatePage.textBoxCurrentAddress.click({button:"right",clickCount:3})
    await navigatePage.textBoxCurrentAddress.dispatchEvent('click')
    await navigatePage.textBoxCurrentAddress.press('Enter+Enter');
    await navigatePage.textBoxCurrentAddress.pressSequentially('JanKowal',{delay:200})
    await page.keyboard.press('Shift+J');
    await page.keyboard.press('Control+v');
    await page.keyboard.press('Control+o');
   
    //Assert
    await expect
      .soft(
        page.getByText('You have done a double click'),
        'Double click failed'
      )
      .toBeVisible();
  });
});


test.describe.only('Check Boxes', () => {
  test.beforeEach('s', async ({ page }) => {
    await page.goto('/');
  });
  test('Test different types of Check boxes', async ({ page }) => {
    //Arrange
    const navigatePage = new NavigatePage(page);

    //Act
    await navigatePage.openSelectMenu();
    await page.locator('#withOptGroup > div > div.css-1hwfws3').selectOption({value:'Group 1, option 1'})

   
    //Assert
    expect(page.locator('label').filter({ hasText: 'Angular' }).getByRole('img')).not.toBeChecked()
   ;
  });
});







