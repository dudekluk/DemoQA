import { test, expect } from '@playwright/test';
import { NavigateWidgets } from '../../pages/navigateWidgets.page';


test.describe('Testing auto complete funtion', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test accordians content visibility', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);
    let elemtlist;
    //Act
    await navigateWidgets.openAutoCompletenMenu();
await navigateWidgets.multiChoiceAutoComplete.click()
await page.keyboard.press('a')
await page.getByText('Black', { exact: true }).click();
const val = page.locator(".css-1rhbuit-multiValue auto-complete__multi-value").allInnerTexts()

//console.log('selected:'+) val.)
//console.log('addddddddddd'+page.$$.locator('#autoCompleteMultipleInput').allTextContents())
  


   //Assert
  // await expect.soft(page.locator('#autoCompleteMultipleInput').inputValue()).
  });
});
