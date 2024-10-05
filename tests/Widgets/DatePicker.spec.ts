import { test, expect } from '@playwright/test';
import {
  DatePicker,
  NavigateWidgetsTab,
} from '../../pages/navigateWidgets.page';

test.describe('Testing auto date picker section', () => {
  let navigateAlertsTab: NavigateWidgetsTab;
  let datePicker: DatePicker;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateAlertsTab = new NavigateWidgetsTab(page);
      datePicker = new DatePicker(page);

      await page.goto('/');
    }
  );

  test('Test date selection ', async ({ page }) => {
    //Arrange
    const date = '22/02/2024';

    //Act
    await navigateAlertsTab.openDatePickerMenu();
    await datePicker.button.Date.fill(date);

    //Assert
    await expect(page.locator('#datePickerMonthYearInput')).toHaveValue(date);
  });

  test('Test date and time selection', async ({ page }) => {
    //Arrange
    const dateTime = 'October 3, 2024 12:15 PM';

    //Act
    await navigateAlertsTab.openDatePickerMenu();
    await datePicker.button.DateAndTime.fill(dateTime);

    //Assert
    await expect(page.locator('#dateAndTimePickerInput')).toHaveValue(dateTime);
  });
});
