import { test, expect } from 'vitest';
import Page from './+page.svelte';
import { render, screen, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';

test('Adding a tag', async () => {
	const value = 'cat';

	render(Page);

	const input = screen.getByPlaceholderText('enter a tag');
	await fireEvent.input(input, { target: { value } });

	const button = screen.getByRole('button');
	await fireEvent.click(button);

	expect(screen.getByText(value)).toBeInTheDocument();
});

test('Removing tags works', async () => {
	const value = 'cat';

	render(Page);

	const input = screen.getByPlaceholderText('enter a tag');
	await fireEvent.input(input, { target: { value } });

	const button = screen.getByRole('button');
	await fireEvent.click(button);
	const tagChip = screen.getByText(value);

	const tagDelete = screen.getByTestId('delete-' + value);
	await fireEvent.click(tagDelete);

	expect(tagChip).not.toBeInTheDocument();
});
