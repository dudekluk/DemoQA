import { test, expect } from '@playwright/test';
import { NavigateWidgets } from '../../pages/navigateWidgets.page';

test.describe('Testing auto date picker section', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test date selection ', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);
    const date = '22/02/2024';

    //Act
    await navigateWidgets.openDatePickerMenu();
    await navigateWidgets.datePicker.fill(date);

    //Assert
    await expect(page.locator('#datePickerMonthYearInput')).toHaveValue(date);
  });
  
  test('Test date and time selection', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);
    const dateTime = 'October 3, 2024 12:15 PM';

    //Act
    await navigateWidgets.openDatePickerMenu();
    await navigateWidgets.dateAndTimePicker.fill(dateTime);

    //Assert
    await expect(page.locator('#dateAndTimePickerInput')).toHaveValue(
      dateTime
    );
  });
});
