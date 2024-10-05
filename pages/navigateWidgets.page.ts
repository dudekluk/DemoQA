import { Locator, Page } from '@playwright/test';

export class NavigateWidgetsTab {
  private page: Page;
  public sideBarMenu: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.sideBarMenu = {
      goToWidgets: this.page.getByRole('heading', {
        name: 'Widgets',
      }),
      Accordian: this.page.locator('li').filter({ hasText: 'Accordian' }),
      AutoComplete: this.page
        .locator('li')
        .filter({ hasText: 'Auto Complete' }),
      DatePicker: this.page.locator('li').filter({ hasText: 'Date Picker' }),
      Slider: this.page.locator('li').filter({ hasText: 'Slider' }),
      ProgressBar: this.page.locator('li').filter({ hasText: 'Progress Bar' }),
      Tabs: this.page.locator('li').filter({ hasText: 'Tabs' }),
      ToolTips: this.page.locator('li').filter({ hasText: 'Tool Tips' }),
      Menu: this.page.locator('li').filter({ hasText: 'Menu' }),
      SelectMenu: this.page.locator('li').filter({ hasText: 'Select Menu' }),
    };
  }

  public async openAccordianMenu() {
    await this.sideBarMenu.goToWidgets.click();
    await this.sideBarMenu.Accordian.click();
  }
  public async openAutoCompletenMenu() {
    await this.sideBarMenu.goToWidgets.click();
    await this.sideBarMenu.AutoComplete.click();
  }
  public async openDatePickerMenu() {
    await this.sideBarMenu.goToWidgets.click();
    await this.sideBarMenu.DatePicker.click();
  }
  public async openSliderMenu() {
    await this.sideBarMenu.goToWidgets.click();
    await this.sideBarMenu.Slider.click();
  }
  public async openProgressBar() {
    await this.sideBarMenu.goToWidgets.click();
    await this.sideBarMenu.ProgressBar.click();
  }
  public async openTextTabs() {
    await this.sideBarMenu.goToWidgets.click();
    await this.sideBarMenu.Tabs.click();
  }
  public async openToolTipsTab() {
    await this.sideBarMenu.goToWidgets.click();
    await this.sideBarMenu.ToolTips.click();
  }
}

export class Accordian {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      First: this.page.getByText('What is Lorem Ipsum?'),
      Second: this.page.getByText('Where does it come from?'),
      Third: this.page.getByText('Why do we use it?'),
    };
  }
}

export class AutoComplete {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      MultiChoice: this.page.locator('.auto-complete__value-container').first(),
      SingleChoise: this.page.locator(
        '#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container'
      ),
    };
  }
}

export class DatePicker {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      Date: this.page.locator('#datePickerMonthYearInput'),
      DateAndTime: this.page.locator('#dateAndTimePickerInput'),
    };
  }
}

export class ProgressBar {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      ProgressBar: this.page.getByRole('button', { name: 'Start' }),
      ProgressBarReset: this.page.getByRole('button', { name: 'Reset' }),
    };
  }
}

export class Slider {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      Slider: this.page.getByRole('slider'),
    };
  }
}

export class Tab {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      Use: this.page.getByRole('tablist').getByText('Use', { exact: true }),
      What: this.page.getByRole('tablist').getByText('What', { exact: true }),
      Origin: this.page.getByRole('tablist').getByText('Origin', { exact: true }),
      More: this.page.getByRole('tablist').getByText('More', { exact: true }),
    };
  }
}


export class ToolTips {
  private page: Page;
  public element: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.element = {
      Button: this.page.getByRole('button', { name: 'Hover me to see' }),
      Input: this.page.getByPlaceholder('Hover me to see'),
      Text:  this.page.getByText('Contrary'),
    };
  }
}
