import { describe, it, expect } from 'vitest';
import { icons } from '$lib/data/icons';
import type { Icon } from '$lib/types';

describe('icons', () => {
	it('should be an array', () => {
		expect(Array.isArray(icons)).toBe(true);
	});

	it('should contain at least one icon', () => {
		expect(icons.length).toBeGreaterThan(0);
	});

	it('should have valid icon structure', () => {
		icons.forEach((icon: Icon) => {
			expect(icon).toHaveProperty('name');
			expect(icon).toHaveProperty('src');
			expect(typeof icon.name).toBe('string');
			expect(typeof icon.src).toBe('string');
		});
	});

	it('should have non-empty name and src fields', () => {
		icons.forEach((icon: Icon) => {
			expect(icon.name.length).toBeGreaterThan(0);
			expect(icon.src.length).toBeGreaterThan(0);
		});
	});

	it('should have unique icon names', () => {
		const names = icons.map((icon) => icon.name);
		const uniqueNames = new Set(names);
		expect(names.length).toBe(uniqueNames.size);
	});
});
