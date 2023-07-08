import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});

test('tags page exist', async ({ page }) => {
	await page.goto('/tags');
	await expect(page.getByText('Tags')).toBeVisible();
});
