import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import Contact from '$lib/components/Contact.svelte';

describe('Contact Component', () => {
	it('should render the "Contact" heading', () => {
		const { body } = render(Contact);
		expect(body).toContain('Contact');
		expect(body).toContain('id="contact-heading"');
	});

	it('should render the "Send me a message!" title', () => {
		const { body } = render(Contact);
		expect(body).toContain('Send me a message!');
	});

	it('should render social media links', () => {
		const { body } = render(Contact);
		expect(body).toContain('aria-label="Social media links"');
		expect(body).toContain('href="https://www.linkedin.com/in/jakub-pinkowski-b44405134/"');
		expect(body).toContain('href="https://github.com/Jakub-Pinkowski"');
		expect(body).toContain('alt="linkedin"');
		expect(body).toContain('alt="github"');
	});

	it('should contain the ContactForm component', () => {
		const { body } = render(Contact);
		// Check for some ContactForm specific element or text
		// Since ContactForm is imported, its content should be rendered
		expect(body).toContain('form');
	});

	it('should have the correct section id', () => {
		const { body } = render(Contact);
		expect(body).toContain('id="contact"');
	});
});
