import { test, expect } from 'vitest';
import Page from './+page.svelte';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import '@testing-library/jest-dom';

test('Adding a tag', async () => {
	render(Page);

	const input = screen.getByPlaceholderText('enter a tag');
	await fireEvent.change(input, { target: { value: 'cat' } });

	const button = screen.getByRole('button');
	await fireEvent.click(button);

	const panel = screen.getByTestId('tag-panel');

	waitFor(() => expect(panel).toHaveTextContent('cat'));
});
