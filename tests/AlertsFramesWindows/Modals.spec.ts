import { test, expect } from '@playwright/test';
import { navigatePageAlerts } from '../../pages/navigateAlerts.page';

test.describe('Testing modal dialogs popups', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test small modal', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const message = 'This is a small modal. It has very less content';

    //Act
    await navigatePage.openModalsMenu();
    await navigatePage.smallModalButton.click();

    //Assert
    await expect(
      page.getByLabel('Small Modal').locator('.modal-body')
    ).toContainText(message);
  });

  test('Test large frame', async ({ page }) => {
    //Arrange
    const navigatePage = new navigatePageAlerts(page);
    const message =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

    //Act
    await navigatePage.openModalsMenu();
    await navigatePage.bigModalButton.click();

    //Assert
    await expect(
      page.getByLabel('Large Modal').locator('.modal-body')
    ).toContainText(message);
  });
});
