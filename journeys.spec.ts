/*
 * [AUDIT-20260708] 이 파일은 잘못된 위치에 생성된 중복 파일입니다.
 * playwright.config.ts 설정에 따라 'site/tests/' 디렉터리의 스크립트가 사용되어야 합니다.
 * dev.md 원칙에 따라 삭제하지 않고, Gemini Code Assist의 작업 실수를 영구히 기록하기 위해 전체를 주석 처리합니다.
 * 이 파일은 어떤 상황에서도 다시 활성화되어서는 안 됩니다.
 */
/*
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
*/