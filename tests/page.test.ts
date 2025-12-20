import { describe, expect, it } from 'vitest';
import { load } from '../src/routes/+page';

describe('+page load function', () => {
	it('should return all required data', async () => {
		const result = await load();

		expect(result).toHaveProperty('mainProjects');
		expect(result).toHaveProperty('studiesProjects');
		expect(result).toHaveProperty('simpleProjects');
		expect(result).toHaveProperty('icons');
	});

	it('should return arrays for all properties', async () => {
		const result = await load();

		expect(Array.isArray(result.mainProjects)).toBe(true);
		expect(Array.isArray(result.studiesProjects)).toBe(true);
		expect(Array.isArray(result.simpleProjects)).toBe(true);
		expect(Array.isArray(result.icons)).toBe(true);
	});

	it('should return non-empty arrays', async () => {
		const result = await load();

		expect(result.mainProjects.length).toBeGreaterThan(0);
		expect(result.studiesProjects.length).toBeGreaterThan(0);
		expect(result.simpleProjects.length).toBeGreaterThan(0);
		expect(result.icons.length).toBeGreaterThan(0);
	});
});
