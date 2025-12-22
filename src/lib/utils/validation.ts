export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

export interface ContactFormErrors {
	name: string;
	email: string;
	message: string;
}

export interface ValidationResult {
	isValid: boolean;
	errors: ContactFormErrors;
}

/**
 * Validates an email address using a standard regex pattern
 */
export const isValidEmail = (value: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(value);
};

/**
 * Validates contact form data
 * Returns validation result with errors for each field
 */
export const validateContactForm = (formData: ContactFormData): ValidationResult => {
	const errors: ContactFormErrors = {
		name: '',
		email: '',
		message: ''
	};

	if (!formData.name) {
		errors.name = 'Name is required.';
	}

	if (!formData.email) {
		errors.email = 'Email is required.';
	} else if (!isValidEmail(formData.email)) {
		errors.email = 'Please enter a valid email address.';
	}

	if (!formData.message) {
		errors.message = 'Message is required.';
	}

	return {
		isValid: !errors.name && !errors.email && !errors.message,
		errors
	};
};
