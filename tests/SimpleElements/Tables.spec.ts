import { test, expect } from '@playwright/test';
import {
  AddNewTableRecord,
  NavigateElementsTab,
} from '../../pages/navigateElements.page';

test.describe('Testing table content', () => {
  let navigateElementsTab: NavigateElementsTab;
  let addNewTableRecord: AddNewTableRecord;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateElementsTab = new NavigateElementsTab(page);
      addNewTableRecord = new AddNewTableRecord(page);
      await page.goto('/');
    }
  );

  test('Test adding new person to the table1', async ({ page }) => {
    //Arrange
    const userData = {
      newFirstName: 'Jan',
      newLastName: 'Kowal',
      newEmail: 'JanKowal@wp.pl',
      newAge: '22',
      newSalary: '2222',
      newDepartment: 'IT',
    };

    const fullTable = page.locator('.rt-table');
    const lastRow = fullTable.getByRole('rowgroup').nth(3);

    const firstName = lastRow.locator('.rt-td').nth(0);
    const lastName = lastRow.locator('.rt-td').nth(1);
    const age = lastRow.locator('.rt-td').nth(2);
    const email = lastRow.locator('.rt-td').nth(3);

    //Acts
    await navigateElementsTab.openTableMenu();
    await addNewTableRecord.newTableRecord(userData);

    //Assert
    await expect.soft(firstName).toHaveText(userData.newFirstName);
    await expect.soft(lastName).toContainText(userData.newLastName);
    await expect.soft(email).toContainText(userData.newEmail);
    await expect.soft(age).toContainText(userData.newAge);
  });
});
