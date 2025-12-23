import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import Banner from '$lib/components/Banner.svelte';

describe('Banner Component', () => {
	it('should render the name and title', () => {
		const { body } = render(Banner);
		expect(body).toContain('Jakub Pinkowski');
		expect(body).toContain('Web Developer');
	});

	it('should have a scroll down link to about-me section', () => {
		const { body } = render(Banner);
		expect(body).toContain('href="#about-me"');
		expect(body).toContain('Scroll down');
		expect(body).toContain('aria-label="Scroll down to About Me section"');
	});

	it('should have the correct header id', () => {
		const { body } = render(Banner);
		expect(body).toContain('id="banner"');
	});
});
