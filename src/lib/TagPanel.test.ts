import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import TagPanel from './TagPanel.svelte';

test('shows the tags label', () => {
	render(TagPanel);
	const label = screen.getByText('Tags');

	expect(label).toBeInTheDocument();
});

test.each([
	[[], ''],
	[[{ name: 'bird' }], 'bird'],
	[[{ name: 'cat' }, { name: 'bird' }], 'cat bird']
])('given %o as tags, the panal should contain "%s"', (tags, expected) => {
	render(TagPanel, { tags });
	const panel = screen.getByTestId('tag-panel');

	expect(panel).toHaveTextContent(expected);
});
