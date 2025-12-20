import { describe, expect, it } from 'vitest';

describe('Application Routes', () => {
	it('should have main page route', async () => {
		// Verify the page loader exists
		const pageModule = await import('../src/routes/+page');
		expect(pageModule).toHaveProperty('load');
		expect(typeof pageModule.load).toBe('function');
	});

	it('should have layout route', async () => {
		// Verify the layout file exists
		const layoutExists = await import('../src/routes/+layout.svelte')
			.then(() => true)
			.catch(() => false);
		expect(layoutExists).toBe(true);
	});
});
