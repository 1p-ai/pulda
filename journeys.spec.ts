import { test, expect, devices } from '@playwright/test';

test.describe('Desktop User Journeys', () => {
  test('should navigate through the main content journey', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: '과제' }).click();
    await expect(page).toHaveURL(/.*\/project/);
    await expect(page.getByRole('heading', { name: '과제' })).toBeVisible();

    await page.locator('.project-card a').first().click();
    await expect(page).toHaveURL(/.*\/project\/.+/);

    await page.getByRole('link', { name: '이야기' }).click();
    await expect(page).toHaveURL(/.*\/story/);
    await expect(page.getByRole('heading', { name: '이야기' })).toBeVisible();

    await page.locator('.story-card a').first().click();
    await expect(page).toHaveURL(/.*\/story\/.+/);

    await page.getByRole('link', { name: '함께 풀기' }).click();
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.getByRole('heading', { name: '만남' })).toBeVisible();
  });

  test('should persist theme selection across pages', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('button', { name: '테마를 다크 모드로 바꾸기' })
      .click();
    await expect(page.locator('html')).toHaveClass('dark');

    await page.goto('/about');
    await expect(page.locator('html')).toHaveClass('dark');

    await page
      .getByRole('button', { name: '테마를 라이트 모드로 바꾸기' })
      .click();
    await expect(page.locator('html')).not.toHaveClass('dark');
  });
});

test.describe('Mobile User Journeys', () => {
  test.use({ ...devices['iPhone 13'] });

  test('should open, navigate, and close the mobile menu', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: '메뉴 열기' });
    await menuButton.click();
    await expect(page.locator('body')).toHaveClass('menu-open');

    const aboutLink = page.getByRole('navigation').getByRole('link', { name: '소개' });
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('body')).not.toHaveClass('menu-open');
  });
});