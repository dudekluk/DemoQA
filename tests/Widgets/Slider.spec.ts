import { test, expect } from '@playwright/test';
import { NavigateWidgetsTab, Slider } from '../../pages/navigateWidgets.page';

test.describe('Test slider button', () => {
  let navigateAlertsTab: NavigateWidgetsTab;
  let slider: Slider;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateAlertsTab = new NavigateWidgetsTab(page);
      slider = new Slider(page);

      await page.goto('/');
    }
  );

  test('Test slider selector with keybord', async ({ page }) => {
    //Arrange
    const arrowPress = 10;

    //Act
    await navigateAlertsTab.openSliderMenu();
    await slider.button.Slider.hover();
    await page.mouse.down();
    await slider.button.Slider.hover({
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
    const inputVal = '20';

    //Act
    await navigateAlertsTab.openSliderMenu();
    await slider.button.Slider.fill(inputVal);

    //Assert
    await expect(page.locator('#sliderValue')).toHaveValue(inputVal);
  });
});
