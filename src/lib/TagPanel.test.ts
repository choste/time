import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import TagPanel from './TagPanel.svelte';

test('shows proper heading when rendered', () => {
	render(TagPanel);
	const text = screen.getByText('Tags');
	expect(text).toBeInTheDocument();
});
