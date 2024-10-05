import { test, expect } from '@playwright/test';
import { ModalAlert, NavigateAlertsTab } from '../../pages/navigateAlerts.page';

test.describe('Testing modal dialogs popups', () => {
  let navigateElementsTab: NavigateAlertsTab;
  let modalAlert: ModalAlert;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateElementsTab = new NavigateAlertsTab(page);
      modalAlert = new ModalAlert(page);

      await page.goto('/');
    }
  );

  test('Test small modal', async ({ page }) => {
    //Arrange
    const message = 'This is a small modal. It has very less content';

    //Act
    await navigateElementsTab.openModalsMenu();
    await modalAlert.button.Small.click();

    //Assert
    await expect(
      page.getByLabel('Small Modal').locator('.modal-body')
    ).toContainText(message);
  });

  test('Test large frame', async ({ page }) => {
    //Arrange
    const message =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

    //Act
    await navigateElementsTab.openModalsMenu();
    await modalAlert.button.Big.click();

    //Assert
    await expect(
      page.getByLabel('Large Modal').locator('.modal-body')
    ).toContainText(message);
  });
});
