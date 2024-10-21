import { Page } from '@playwright/test';
import selectors from '../selectors/selectors.json';
export class ContactPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToContact() {
    await this.page.locator(selectors.contactPage.contactMenu).click();
  }

  async fillForm() {
    const formData = selectors.formData;
    await this.page
      .locator(selectors.contactPage.nameInput)
      .fill(formData.name);
    await this.page
      .locator(selectors.contactPage.companyInput)
      .fill(formData.company);
    await this.page
      .locator(selectors.contactPage.emailInput)
      .fill(formData.email);
    await this.page
      .locator(selectors.contactPage.phoneInput)
      .fill(formData.phone);
    await this.page
      .locator(selectors.contactPage.messageInput)
      .fill(formData.message);
  }
}
