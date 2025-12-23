import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import Page from '$routes/+page.svelte';
import { createMockProjects } from '$tests/setup/fixtures';

describe('+page.svelte Component SSR', () => {
	const mockIcons = [
		{ name: 'React', src: '/icons/react.svg' },
		{ name: 'TypeScript', src: '/icons/ts.svg' }
	];

	const data = {
		icons: mockIcons,
		mainProjects: createMockProjects(1),
		simpleProjects: createMockProjects(1),
		studiesProjects: createMockProjects(1)
	};

	it('should render all main sections', () => {
		const { body } = render(Page, { props: { data } });

		expect(body).toContain('id="banner"');
		expect(body).toContain('id="about-me"');
		expect(body).toContain('id="portfolio"');
		expect(body).toContain('id="contact"');
	});
});
