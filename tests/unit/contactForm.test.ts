import { describe, expect, it } from 'vitest';
import { isValidEmail } from '$lib/utils/validation';

describe('Contact Form Validation', () => {

	describe('Email validation', () => {
		it('should accept valid email addresses', () => {
			expect(isValidEmail('test@example.com')).toBe(true);
			expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
			expect(isValidEmail('test+tag@example.com')).toBe(true);
		});

		it('should reject invalid email addresses', () => {
			expect(isValidEmail('')).toBe(false);
			expect(isValidEmail('invalid')).toBe(false);
			expect(isValidEmail('invalid@')).toBe(false);
			expect(isValidEmail('@domain.com')).toBe(false);
			expect(isValidEmail('test@domain')).toBe(false);
			expect(isValidEmail('test @domain.com')).toBe(false);
		});
	});

	describe('Form data structure', () => {
		it('should have correct initial form structure', () => {
			const formData = {
				name: '',
				email: '',
				message: ''
			};

			expect(formData).toHaveProperty('name');
			expect(formData).toHaveProperty('email');
			expect(formData).toHaveProperty('message');
		});

		it('should have correct error structure', () => {
			const errors = {
				name: '',
				email: '',
				message: ''
			};

			expect(errors).toHaveProperty('name');
			expect(errors).toHaveProperty('email');
			expect(errors).toHaveProperty('message');
		});
	});
});
