import { test, expect } from '@playwright/test';
import {
  NavigateWidgetsTab,
  Accordian,
} from '../../pages/navigateWidgets.page';

test.describe('Testing all the accordians', () => {
  let navigateAlertsTab: NavigateWidgetsTab;
  let accordian: Accordian;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateAlertsTab = new NavigateWidgetsTab(page);
      accordian = new Accordian(page);
      
      await page.goto('/');
    }
  );

  test('Test accordians content visibility', async ({ page }) => {
    //Arrange

    //Act
    await navigateAlertsTab.openAccordianMenu();

    //await navigateWidgets.firstAccordian.click();
    await expect.soft(page.locator('#section1Content')).toBeVisible();

    await accordian.button.Second.click();
    await expect.soft(page.locator('#section2Content')).toBeVisible();

    await accordian.button.Third.click();
    await expect.soft(page.locator('#section3Content')).toBeVisible();
  });
});
