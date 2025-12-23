import { describe, expect, it } from 'vitest';
import Navigation from '$lib/components/Navigation.svelte';
import { render } from 'svelte/server';

describe('Navigation Component SSR', () => {
	it('should render the navigation links when open', () => {
		// We can pass props to render
		const { body } = render(Navigation, { props: { open: true } });

		expect(body).toContain('Home');
		expect(body).toContain('About Me');
		expect(body).toContain('Portfolio');
		expect(body).toContain('Contact');
	});

	it('should have correct href attributes when open', () => {
		const { body } = render(Navigation, { props: { open: true } });

		expect(body).toContain('href="/"');
		expect(body).toContain('href="#about-me"');
		expect(body).toContain('href="#portfolio"');
		expect(body).toContain('href="#contact"');
	});

	it('should initially have the menu closed (ssr)', () => {
		const { body } = render(Navigation);
		// The <nav> element is only rendered when open is true
		// and open is false by default.
		expect(body).not.toContain('<nav');
	});

	it('should render the Hamburger component with correct aria-label', () => {
		const { body } = render(Navigation);
		expect(body).toContain('aria-label="Toggle navigation menu"');
	});

	it('should render the Hamburger component with correct aria-controls', () => {
		const { body } = render(Navigation);
		expect(body).toContain('aria-controls="main-menu"');
	});
});
