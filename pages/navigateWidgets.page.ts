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

  //Accordian elements
  firstAccordian = this.page.getByText('What is Lorem Ipsum?');
  secondAccordian = this.page.getByText('Where does it come from?');
  thirdAccordian = this.page.getByText('Why do we use it?');
  
  // Auto complete elements
  multiChoiceAutoComplete = this.page
    .locator('.auto-complete__value-container')
    .first();
  singleChoiceAutoComplete = this.page.locator(
    '#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container'
  );

  // Date picker elements
  datePicker = this.page.locator('#datePickerMonthYearInput');
  dateAndTimePicker = this.page.locator('#dateAndTimePickerInput');

  // Text tabs elements
  tabUseButton = this.page
    .getByRole('tablist')
    .getByText('Use', { exact: true });
  tabWhatButton = this.page
    .getByRole('tablist')
    .getByText('What', { exact: true });
  tabOriginButton = this.page
    .getByRole('tablist')
    .getByText('Origin', { exact: true });
  tabMoreButton = this.page
    .getByRole('tablist')
    .getByText('More', { exact: true });

  // Tool tips elements
  toolTipButton = this.page.getByRole('button', { name: 'Hover me to see' });
  toolTipInput = this.page.getByPlaceholder('Hover me to see');
  toolTipText = this.page.getByText('Contrary');
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
  public async openTextTabs() {
    await this.goToWidgets.click();
    await this.elementsTabs.click();
  }
  public async openToolTipsTab() {
    await this.goToWidgets.click();
    await this.elementsToolTips.click();
  }
  
}
