/**
 * Global test setup
 * This file runs before all tests
 */

import { afterAll, afterEach, beforeAll, vi } from 'vitest';

// Setup runs once before all tests
beforeAll(() => {
	// Global setup code here if needed
});

// Cleanup runs once after all tests
afterAll(() => {
	// Global cleanup code here if needed
});

// Cleanup after each test
afterEach(() => {
	// Reset mocks after each test
	vi.clearAllMocks();
	vi.restoreAllMocks();
});
