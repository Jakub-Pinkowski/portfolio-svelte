import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import Page from '$routes/+page.svelte';

import Layout from '$routes/+layout.svelte';

describe('Navigation Integration', () => {
	it('should have all sections targeted by navigation links on the home page', () => {
		// Mock data for Portfolio component
		const mockData = {
			icons: [],
			mainProjects: [],
			simpleProjects: [],
			studiesProjects: []
		};

		const { body } = render(Page, { props: { data: mockData } });

		// Navigation targets: #about-me, #portfolio, #contact
		expect(body).toContain('id="about-me"');
		expect(body).toContain('id="portfolio"');
		expect(body).toContain('id="contact"');
	});

	it('should have a main content anchor and skip link in layout', () => {
		// We need to provide a snippet for the slot in Svelte 5 SSR render if we want to see it,
		// but here we just check the layout itself.
		const { body } = render(Layout);

		expect(body).toContain('href="#main-content"');
		expect(body).toContain('id="main-content"');
	});
});
