import { Page } from '@playwright/test';

export class NavigateWidgets {
  constructor(private page: Page) {}
  goToWidgets = this.page.getByRole('heading', {
    name: 'Widgets',
  });

  ///Sidebar navigation to Widgets tab
  elementsAccordian = this.page.locator('li').filter({ hasText: 'Accordian' });
  elementsAutoComplete = this.page
    .locator('li')
    .filter({ hasText: 'Auto Complete' });
  elementsDatePicker = this.page
    .locator('li')
    .filter({ hasText: 'Date Picker' });
  elementSlider = this.page.locator('li').filter({ hasText: 'Slider' });
  elementsProgressBar = this.page
    .locator('li')
    .filter({ hasText: 'Progress Bar' });
  elementsTabs = this.page.locator('li').filter({ hasText: 'Tabs' });
  elementsToolTips = this.page.locator('li').filter({ hasText: 'Tool Tips' });
  elementsMenu = this.page.locator('li').filter({ hasText: 'Menu' });
  elementsSelectMenu = this.page
    .locator('li')
    .filter({ hasText: 'Select Menu' });

  //
  //sliderBar = this.page.locator('#sliderContainer')
  sliderBar = this.page.getByRole('slider');
  progressBarButton = this.page.getByRole('button', { name: 'Start' });
  progressBarResetButton = this.page.getByRole('button', { name: 'Reset' });

  // Open menu item
  public async openAccordianMenu() {
    await this.goToWidgets.click();
    await this.elementsAccordian.click();
  }
  public async openAutoCompletenMenu() {
    await this.goToWidgets.click();
    await this.elementsAutoComplete.click();
  }
  public async openDatePickerMenu() {
    await this.goToWidgets.click();
    await this.elementsDatePicker.click();
  }
  public async openSliderMenu() {
    await this.goToWidgets.click();
    await this.elementSlider.click();
  }

  public async openProgressBar() {
    await this.goToWidgets.click();
    await this.elementsProgressBar.click();
  }
}
