import { Page, Locator } from '@playwright/test';

export class NavigateAlertsTab {
  private page: Page;
  public sideBarMenu: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.sideBarMenu = {
      goToAlerts: this.page.getByRole('heading', {
        name: 'Alerts, Frame & Windows',
      }),
      BrowserWindow: this.page
        .locator('li')
        .filter({ hasText: 'Browser Windows' }),
      Alerts: this.page.locator('li').filter({ hasText: 'Alerts' }),
      Modals: this.page.locator('li').filter({ hasText: 'Modal Dialogs' }),
      Frames: this.page.getByText('Frames', { exact: true }),
      NestedFrames: this.page
        .locator('li')
        .filter({ hasText: 'Nested Frames' }),
    };
  }

  public async openBrowserWindowsMenu() {
    await this.sideBarMenu.goToAlerts.click();
    await this.sideBarMenu.BrowserWindow.click();
  }
  public async openAlertsMenu() {
    await this.sideBarMenu.goToAlerts.click();
    await this.sideBarMenu.Alerts.click();
  }
  public async openModalsMenu() {
    await this.sideBarMenu.goToAlerts.click();
    await this.sideBarMenu.Modals.click();
  }
  public async openFramesMenu() {
    await this.sideBarMenu.goToAlerts.click();
    await this.sideBarMenu.Frames.click();
  }
  public async openNestedFramesMenu() {
    await this.sideBarMenu.goToAlerts.click();
    await this.sideBarMenu.NestedFrames.click();
  }
}

export class SimpleAlert {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      Alert: this.page.locator('#alertButton'),
      Timer: this.page.locator('#timerAlertButton'),
      Confirm: this.page.locator('#confirmButton'),
      Prompt: this.page.locator('#promtButton'),
    };
  }
}

export class ModalAlert {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      Small: this.page.locator('#showSmallModal'),
      Big: this.page.locator('#showLargeModal'),
    };
  }
}

export class WindowAndTab {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      newTab: this.page.getByRole('button', { name: 'New Tab' }),
      newWindow: this.page.getByRole('button', {
        name: 'New Window',
        exact: true,
      }),
      newWindowMessage: this.page.getByRole('button', {
        name: 'New Window Message',
      }),
    };
  }
}

