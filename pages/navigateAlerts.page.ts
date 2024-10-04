import { Page } from '@playwright/test';

export class navigatePageAlerts {
  constructor(private page: Page) {}
  goToAlerts = this.page.getByRole('heading', {
    name: 'Alerts, Frame & Windows',
  });

  ///Sidebar navigation to Alert tab
  elementsBrowserWindows = this.page
    .locator('li')
    .filter({ hasText: 'Browser Windows' });
  elementsAlerts = this.page.locator('li').filter({ hasText: 'Alerts' });
  elementsModals = this.page.locator('li').filter({ hasText: 'Modal Dialogs' });
  elementsFrames = this.page.getByText('Frames', { exact: true })
  elementsNestedFrames = this.page.locator('li').filter({ hasText: 'Nested Frames' });

  //Browser Windows buttons
  newTabButton = this.page.getByRole('button', { name: 'New Tab' });
  newWindowButton = this.page.getByRole('button', {
    name: 'New Window',
    exact: true,
  });
  newWindowMessageButton = this.page.getByRole('button', {
    name: 'New Window Message',
  });

  // Alerts buttons
  alertButton = this.page.locator('#alertButton');
  alertTimerButton = this.page.locator('#timerAlertButton');
  alertConfirmButton = this.page.locator('#confirmButton');
  alertPromptButton = this.page.locator('#promtButton');

  // Modals buttons
  smallModalButton = this.page.locator('#showSmallModal');
  bigModalButton = this.page.locator('#showLargeModal');

  // Frames 



  // Open menu item
  public async openBrowserWindowsMenu() {
    await this.goToAlerts.click();
    await this.elementsBrowserWindows.click();
  }

  public async openAlertsMenu() {
    await this.goToAlerts.click();
    await this.elementsAlerts.click();
  }
  public async openModalsMenu() {
    await this.goToAlerts.click();
    await this.elementsModals.click();
  }
  public async openFramesMenu() {
    await this.goToAlerts.click();
    await this.elementsFrames.click();
  }
  public async openNestedFramesMenu() {
    await this.goToAlerts.click();
    await this.elementsNestedFrames.click();
  }
}


