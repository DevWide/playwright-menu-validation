import { test } from '@playwright/test';
import { ContactPage } from '../pages/ContactPages';

test.describe('Contact Form Automation', () => {
  test('should navigate to Contact page and fill the form', async ({
    page,
  }) => {
    const contactPage = new ContactPage(page);

    await page.goto('/');
    await contactPage.navigateToContact();
    await page.waitForTimeout(3000);
    await contactPage.fillForm();
    await page.screenshot({
      path: 'screenshots/form-filled.png',
      fullPage: true,
    });
  });
});
