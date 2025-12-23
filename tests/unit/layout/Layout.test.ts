import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import Layout from '$routes/+layout.svelte';

describe('+layout.svelte Component SSR', () => {
	it('should render skip link', () => {
		const { body } = render(Layout);
		expect(body).toContain('Skip to main content');
		expect(body).toContain('href="#main-content"');
	});

	it('should render navigation and footer', () => {
		const { body } = render(Layout);
		// Navigation's initial state (Hamburger)
		expect(body).toContain('aria-label="Toggle navigation menu"');
		// Footer
		expect(body).toContain('Copyright © 2025');
	});

	it('should render main content container', () => {
		const { body } = render(Layout);
		expect(body).toContain('id="main-content"');
	});
});
