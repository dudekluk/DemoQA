import { Page } from '@playwright/test';
import test from 'node:test';
import { text } from 'stream/consumers';

export class NavigatePage {
  constructor(private page: Page) {}
  goToElements = this.page.locator('div').filter({ hasText: /^Elements$/ });
  goToWidgets = this.page.locator('div').filter({ hasText: /^Widgets$/ });

  //Sidebar navigation elements
  elementsTextBox = this.page.locator('li').filter({ hasText: 'Text Box' });
  elementsCheckBox = this.page.locator('li').filter({ hasText: 'Check Box' });
  elementsRadioButton = this.page.locator('li').filter({ hasText: 'Radio Button' });
  elementsButtons= this.page.locator('li').filter({ hasText: 'Buttons' });

  ///
  elementsSelectMenu= this.page.locator('li').filter({ hasText: 'Select Menu' });
  // Text box elements
  textBoxUserName = this.page.getByPlaceholder('Full Name');
  textBoxEmail = this.page.locator('#userEmail');
  textBoxCurrentAddress = this.page.locator('#currentAddress');
  textBoxPermanentAddress = this.page.locator('#permanentAddress');
  textBoxSubmitButton = this.page.getByRole('button', { name: 'Submit' });
  // Check box elements

  //Radio button elements
  yesRadioButton = this.page.getByText('Yes')
  impressiveRadioButton = this.page.getByText('Impressive')
  noRadioButton = this.page.getByText('No')
  // Button action types
  clickButton = this.page.getByRole('button', { name: 'Click Me', exact: true })
  rightClickButton = this.page.locator('#rightClickBtn')
  doubleClickButton = this.page.locator('#doubleClickBtn')


  public async openTextBoxMenu() {
    await this.goToElements.first().click();
    await this.elementsTextBox.click();
  }
  public async openCheckBoxMenu() {
    await this.goToElements.first().click();
    await this.elementsTextBox.click();
  }
  public async openRadioButtonMenu() {
    await this.goToElements.first().click();
    await this.elementsRadioButton.click();
  }
  public async openButtonsMenu() {
    await this.goToElements.first().click();
    await this.elementsButtons.click();
  }
  ///
  public async openSelectMenu() {
    await this.goToWidgets.first().click();
    await this.elementsSelectMenu.click();
  }
}
