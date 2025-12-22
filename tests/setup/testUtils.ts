/**
 * Shared test utilities and helper functions
 */

/**
 * Waits for a specified amount of time (useful for testing timeouts)
 */
export const wait = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Creates a mock fetch response
 */
export const createMockResponse = (data: unknown, ok = true, status = 200) => {
	return {
		ok,
		status,
		json: async () => data,
		text: async () => JSON.stringify(data)
	};
};

/**
 * Checks if an element has a specific CSS class
 */
export const hasClass = (element: Element, className: string): boolean => {
	return element.classList.contains(className);
};

/**
 * Gets computed style value for an element
 */
export const getStyle = (element: Element, property: string): string => {
	return window.getComputedStyle(element).getPropertyValue(property);
};
