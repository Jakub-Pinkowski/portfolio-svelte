import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import ContactForm from '$lib/components/contact/ContactForm.svelte';

describe('ContactForm Component SSR', () => {
	it('should render all form fields', () => {
		const { body } = render(ContactForm);
		expect(body).toContain('id="name"');
		expect(body).toContain('id="email"');
		expect(body).toContain('id="message"');
		expect(body).toContain('placeholder="Name"');
		expect(body).toContain('placeholder="Email"');
		expect(body).toContain('placeholder="Message"');
	});

	it('should render the submit button', () => {
		const { body } = render(ContactForm);
		expect(body).toContain('Send');
		expect(body).toContain('class="my-button');
	});

	it('should have labels for accessibility', () => {
		const { body } = render(ContactForm);
		expect(body).toContain('for="name"');
		expect(body).toContain('for="email"');
		expect(body).toContain('for="message"');
		expect(body).toContain('class="sr-only"');
	});

	it('should have required attributes on inputs', () => {
		const { body } = render(ContactForm);
		// Check for required attribute. In SSR output it might be present.
		expect(body).toContain('required');
	});
});
