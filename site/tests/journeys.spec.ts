import { test, expect } from '@playwright/test';

test.describe('Desktop User Journeys', () => {
  test('should navigate through the main content journey', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');

    const mainNav = page.getByLabel('주요 메뉴');
    await mainNav.getByRole('link', { name: '과제' }).click();
    await expect(page).toHaveURL(/.*\/project/);
    await expect(page.getByRole('heading', { name: '명확해진 결과' })).toBeVisible();

    await page.locator('.project-list .content-item').first().click();
    await expect(page).toHaveURL(/.*\/project\/.+/);

    await mainNav.getByRole('link', { name: '이야기' }).click();
    await expect(page).toHaveURL(/.*\/story/);
    await expect(page.getByRole('heading', { name: '편하게 읽는 작업 노트' })).toBeVisible();

    await page.locator('.story-card').first().click();
    await expect(page).toHaveURL(/.*\/story\/.+/);

    await mainNav.getByRole('link', { name: '함께 풀기' }).click();
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.getByRole('heading', { name: '풀어야 할 문제가 있으신가요?' })).toBeVisible();
  });

  test('should persist theme selection across pages', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');

    await page
      .getByRole('button', { name: '다크 모드' })
      .click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    await page.goto('/about/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    await page
      .getByRole('button', { name: '라이트 모드' })
      .click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });
});

test.describe('Mobile User Journeys', () => {
  test('should open, navigate, and close the mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: '메뉴 열기' });
    await menuButton.click();
    await expect(page.locator('body')).toContainClass('menu-open');

    const aboutLink = page.getByLabel('주요 메뉴').getByRole('link', { name: '소개' });
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('body')).not.toContainClass('menu-open');
  });
});
