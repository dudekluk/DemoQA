import { test, expect } from '@playwright/test';
import { NavigateElementsTab, Files } from '../../pages/navigateElements.page';
import path from 'path';

test.describe('Test upload and download files', () => {
  let navigateElementsTab: NavigateElementsTab;
  let files: Files;

  test.beforeEach(
    'Set up test environment: navigate to main page, initialize elements',
    async ({ page }) => {
      navigateElementsTab = new NavigateElementsTab(page);
      files = new Files(page);
      await page.goto('/');
    }
  );

  test('Test Download files', async ({ page }) => {
    //Arrange
    const fileDir = 'C:/Projekts/DemoQA/tests/';

    //Act
    await navigateElementsTab.openFilesMenu();
    const downloadPromiss = page.waitForEvent('download');
    await files.file.download.click();
    const downloadFile = await downloadPromiss;
    downloadFile.saveAs(fileDir + downloadFile.suggestedFilename());
    //Assert
    expect(downloadFile.suggestedFilename()).toBe('sampleFile.jpeg');
  });

  test('Test upload files', async ({ page }) => {
    //Arrange
    const fileDir = 'C:/Projekts/DemoQA/tests/';

    //Act
    await navigateElementsTab.openFilesMenu();
    await files.file.upload.setInputFiles(
      path.join(fileDir, 'sampleFile.jpeg')
    );

    //Assert
    await expect
      .soft(page.locator('#uploadedFilePath'))
      .toContainText('sampleFile.jpeg');
  });
});
