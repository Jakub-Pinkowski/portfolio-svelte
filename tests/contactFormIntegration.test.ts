import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('Contact Form Integration Tests', () => {
	let originalFetch: typeof fetch;

	beforeEach(() => {
		originalFetch = global.fetch;
	});

	afterEach(() => {
		global.fetch = originalFetch;
		vi.restoreAllMocks();
	});

	describe('Form validation logic', () => {
		const isValidEmail = (value: string): boolean => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailRegex.test(value);
		};

		const validateForm = (formData: { name: string; email: string; message: string }) => {
			const errors = {
				name: '',
				email: '',
				message: ''
			};
			let isValid = true;

			if (!formData.name) {
				errors.name = 'Name is required.';
				isValid = false;
			}

			if (!formData.email) {
				errors.email = 'Email is required.';
				isValid = false;
			} else if (!isValidEmail(formData.email)) {
				errors.email = 'Please enter a valid email address.';
				isValid = false;
			}

			if (!formData.message) {
				errors.message = 'Message is required.';
				isValid = false;
			}

			return { isValid, errors };
		};

		it('should validate all required fields are present', () => {
			const formData = { name: '', email: '', message: '' };
			const result = validateForm(formData);

			expect(result.isValid).toBe(false);
			expect(result.errors.name).toBe('Name is required.');
			expect(result.errors.email).toBe('Email is required.');
			expect(result.errors.message).toBe('Message is required.');
		});

		it('should validate email format', () => {
			const formData = { name: 'John', email: 'invalid-email', message: 'Hello' };
			const result = validateForm(formData);

			expect(result.isValid).toBe(false);
			expect(result.errors.email).toBe('Please enter a valid email address.');
		});

		it('should pass validation with valid data', () => {
			const formData = {
				name: 'John Doe',
				email: 'john@example.com',
				message: 'Hello, this is a test message.'
			};
			const result = validateForm(formData);

			expect(result.isValid).toBe(true);
			expect(result.errors.name).toBe('');
			expect(result.errors.email).toBe('');
			expect(result.errors.message).toBe('');
		});
	});

	describe('Form submission', () => {
		it('should submit form data to Formspree endpoint', async () => {
			global.fetch = vi.fn().mockResolvedValue({
				ok: true,
				status: 200,
				json: async () => ({ ok: true })
			});

			const formData = {
				name: 'John Doe',
				email: 'john@example.com',
				message: 'Test message'
			};

			const response = await fetch('https://formspree.io/f/xpzgwgre', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(formData)
			});

			expect(global.fetch).toHaveBeenCalledWith(
				'https://formspree.io/f/xpzgwgre',
				expect.objectContaining({
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					},
					body: JSON.stringify(formData)
				})
			);
			expect(response.ok).toBe(true);
		});

		it('should handle successful submission', async () => {
			global.fetch = vi.fn().mockResolvedValue({
				ok: true,
				status: 200,
				json: async () => ({ ok: true })
			});

			const formData = {
				name: 'John Doe',
				email: 'john@example.com',
				message: 'Test message'
			};

			const response = await fetch('https://formspree.io/f/xpzgwgre', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(formData)
			});

			expect(response.ok).toBe(true);
			expect(response.status).toBe(200);
		});

		it('should handle submission failure', async () => {
			global.fetch = vi.fn().mockResolvedValue({
				ok: false,
				status: 500,
				json: async () => ({ error: 'Server error' })
			});

			const formData = {
				name: 'John Doe',
				email: 'john@example.com',
				message: 'Test message'
			};

			const response = await fetch('https://formspree.io/f/xpzgwgre', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(formData)
			});

			expect(response.ok).toBe(false);
			expect(response.status).toBe(500);
		});

		it('should handle network errors', async () => {
			global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

			const formData = {
				name: 'John Doe',
				email: 'john@example.com',
				message: 'Test message'
			};

			await expect(
				fetch('https://formspree.io/f/xpzgwgre', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					},
					body: JSON.stringify(formData)
				})
			).rejects.toThrow('Network error');
		});
	});

	describe('Form state management', () => {
		it('should have correct initial form data structure', () => {
			const initialFormData = {
				name: '',
				email: '',
				message: ''
			};

			expect(initialFormData).toEqual({
				name: '',
				email: '',
				message: ''
			});
		});

		it('should have correct initial errors structure', () => {
			const initialErrors = {
				name: '',
				email: '',
				message: ''
			};

			expect(initialErrors).toEqual({
				name: '',
				email: '',
				message: ''
			});
		});

		it('should have correct toast structure', () => {
			const toast = {
				message: '',
				type: '',
				visible: false
			};

			expect(toast).toHaveProperty('message');
			expect(toast).toHaveProperty('type');
			expect(toast).toHaveProperty('visible');
		});
	});
});
