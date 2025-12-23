import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import AboutMe from '$lib/components/AboutMe.svelte';

describe('AboutMe Component', () => {
	it('should render the "About Me" heading', () => {
		const { body } = render(AboutMe);
		expect(body).toContain('About Me');
		expect(body).toContain('id="about-me-heading"');
	});

	it('should render the greeting and description', () => {
		const { body } = render(AboutMe);
		expect(body).toContain('Hello World!');
		expect(body).toContain("I'm Jakub, a web developer with a passion for programming.");
		expect(body).toContain('TypeScript, JavaScript, HTML, CSS, and jQuery');
	});

	it('should render the portrait image with correct alt text', () => {
		const { body } = render(AboutMe);
		expect(body).toContain('alt="Portrait of Jakub Pinkowski"');
		expect(body).toContain('src="/src/lib/assets/images/me_cropped.webp"');
	});

	it('should have the correct section id', () => {
		const { body } = render(AboutMe);
		expect(body).toContain('id="about-me"');
	});
});
