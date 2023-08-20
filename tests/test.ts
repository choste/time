import { expect, test } from '@playwright/test';

test('tags page exist', async ({ page }) => {
	await page.goto('/tags');
	await expect(page.getByText('Tags')).toBeVisible();
});

test('tag page has an input and button', async ({ page }) => {
	await page.goto('/tags');
	await expect(page.getByPlaceholder('enter a tag')).toBeVisible();
	await expect(page.getByRole('button')).toBeVisible();
});
