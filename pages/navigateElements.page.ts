import { Page } from '@playwright/test';
import { Locator } from '@playwright/test';

export class AddNewTableRecord {
  private page: Page;
  public elements: Record<string, Locator>; 

  constructor(page: Page) {
    this.page = page;
    this.elements = {
      addButton: this.page.getByRole('button', { name: 'Add' }),
      newFirstName: this.page.getByPlaceholder('First Name'),
      newLastName: this.page.getByPlaceholder('Last Name'),
      newEmail: this.page.getByPlaceholder('name@example.com'),
      newAge: this.page.getByPlaceholder('Age'),
      newSalary: this.page.getByPlaceholder('Salary'),
      newDepartment: this.page.getByPlaceholder('Department'),
      submitButton: this.page.getByRole('button', { name: 'Submit' }),
    };
  }

  async newTableRecord(data: { [key: string]: string }) {
    const {
      addButton,
      newFirstName,
      newLastName,
      newEmail,
      newAge,
      newSalary,
      newDepartment,
      submitButton,
    } = this.elements;

    await addButton.click();

    await newFirstName.fill(data.newFirstName);
    await newLastName.fill(data.newLastName);
    await newEmail.fill(data.newEmail);
    await newAge.fill(data.newAge);
    await newSalary.fill(data.newSalary);
    await newDepartment.fill(data.newDepartment);

    await submitButton.click();
  }
}

export class NavigateElementsTab {
  private page: Page;
  public sideBarMenu: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.sideBarMenu = {
      goToElements: this.page.locator('div').filter({ hasText: /^Elements$/ }),
      textBox: this.page.locator('li').filter({ hasText: 'Text Box' }),
      checkBox: this.page.locator('li').filter({ hasText: 'Check Box' }),
      radioButton: this.page.locator('li').filter({ hasText: 'Radio Button' }),
      buttons: this.page.locator('li').filter({ hasText: 'Buttons' }),
      files: this.page.locator('li').filter({ hasText: 'Upload and Download' }),
      table: this.page.locator('li').filter({ hasText: 'Web Tables' }),
      selectMenu: this.page.locator('li').filter({ hasText: 'Select Menu' }),
    };
  }

  public async openTextBoxMenu() {
    await this.sideBarMenu.goToElements.first().click();
    await this.sideBarMenu.textBox.click();
  }
  public async openRadioButtonMenu() {
    await this.sideBarMenu.goToElements.first().click();
    await this.sideBarMenu.radioButton.click();
  }
  public async openButtonsMenu() {
    await this.sideBarMenu.goToElements.first().click();
    await this.sideBarMenu.buttons.click();
  }
  public async openFilesMenu() {
    await this.sideBarMenu.goToElements.first().click();
    await this.sideBarMenu.files.click();
  }
  public async openTableMenu() {
    await this.sideBarMenu.goToElements.first().click();
    await this.sideBarMenu.table.click();
  }
}

export class TextBoxes {
  private page: Page;
  public inputBox: Record<string, Locator>;
  public submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputBox = {
      userName: this.page.getByPlaceholder('Full Name'),
      email: this.page.locator('#userEmail'),
      currentAddress: this.page.locator('#currentAddress'),
      permanentAddress: this.page.locator('#permanentAddress'),
    };
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }
}

export class RadioButtons {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      yes: this.page.getByText('Yes'),
      impressive: this.page.getByText('Impressive'),
      no: this.page.getByText('No'),
    };
  }
}

export class Files {
  private page: Page;
  public file: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.file = {
      upload: this.page.locator('#uploadFile'),
      download: this.page.locator('#downloadButton'),
    };
  }
}

export class ClickType {
  private page: Page;
  public button: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;
    this.button = {
      leftClick: this.page.getByRole('button', {
        name: 'Click Me',
        exact: true,
      }),
      rightClick: this.page.locator('#rightClickBtn'),
      doubleClick: this.page.locator('#doubleClickBtn'),
    };
  }
}
