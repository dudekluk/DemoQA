import { test, expect } from '@playwright/test';
import { NavigateWidgets } from '../../pages/navigateWidgets.page';
import { log } from 'console';

test.describe('Testing all the widges', () => {
  test.beforeEach('Go to main page', async ({ page }) => {
    await page.goto('/');
  });

  test('Test slider selector with keybord', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);
    const arrowPress = 10;

    //Act
    await navigateWidgets.openSliderMenu();
    await navigateWidgets.sliderBar.hover();
    await page.mouse.down();
    await navigateWidgets.sliderBar.hover({
      force: true,
      position: { x: 0, y: -4 },
    });
    await page.mouse.up();

    for (let index = 1; index <= arrowPress; index++) {
      await page.keyboard.press('ArrowRight');
    }

    //Assert
    await expect(page.locator('#sliderValue')).toHaveValue('10');
  });

  test('Test slider selector with fill', async ({ page }) => {
    //Arrange
    const navigateWidgets = new NavigateWidgets(page);
    const inputVal = '20';
   
    //Act
    await navigateWidgets.openSliderMenu();
     await navigateWidgets.sliderBar.fill(inputVal)
   
    //Assert
    await expect(page.locator('#sliderValue')).toHaveValue(inputVal);
  });


});
