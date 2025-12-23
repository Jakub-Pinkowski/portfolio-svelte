import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import Footer from '$lib/components/Footer.svelte';

describe('Footer Component', () => {
	it('should render the copyright notice', () => {
		const { body } = render(Footer);
		expect(body).toContain('Copyright © 2025 - All right reserved');
	});

	it('should render the GitHub link with SVG', () => {
		const { body } = render(Footer);
		expect(body).toContain('href="https://github.com/Jakub-Pinkowski"');
		expect(body).toContain('aria-label="GitHub"');
		expect(body).toContain('GitHub Profile');
	});

	it('should have the footer class', () => {
		const { body } = render(Footer);
		expect(body).toContain('class="footer');
	});
});
