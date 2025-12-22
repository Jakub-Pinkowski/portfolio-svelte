import { describe, expect, it } from 'vitest';
import { isValidEmail, validateContactForm } from '$lib/utils/validation';

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

	describe('validateContactForm', () => {
		it('should return valid result for correct data', () => {
			const data = {
				name: 'John Doe',
				email: 'john@example.com',
				message: 'Hello'
			};
			const result = validateContactForm(data);
			expect(result.isValid).toBe(true);
			expect(result.errors.name).toBe('');
			expect(result.errors.email).toBe('');
			expect(result.errors.message).toBe('');
		});

		it('should return errors for empty data', () => {
			const data = {
				name: '',
				email: '',
				message: ''
			};
			const result = validateContactForm(data);
			expect(result.isValid).toBe(false);
			expect(result.errors.name).toBe('Name is required.');
			expect(result.errors.email).toBe('Email is required.');
			expect(result.errors.message).toBe('Message is required.');
		});

		it('should return error for invalid email', () => {
			const data = {
				name: 'John Doe',
				email: 'invalid-email',
				message: 'Hello'
			};
			const result = validateContactForm(data);
			expect(result.isValid).toBe(false);
			expect(result.errors.email).toBe('Please enter a valid email address.');
		});
	});
});
