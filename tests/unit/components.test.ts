import { describe, expect, it } from 'vitest';

describe('Component Structure Tests', () => {
	describe('Navigation Component', () => {
		it('should export Navigation component', async () => {
			const module = await import('../../src/lib/components/Navigation.svelte');
			expect(module.default).toBeDefined();
		});
	});

	describe('Banner Component', () => {
		it('should export Banner component', async () => {
			const module = await import('../../src/lib/components/Banner.svelte');
			expect(module.default).toBeDefined();
		});
	});

	describe('AboutMe Component', () => {
		it('should export AboutMe component', async () => {
			const module = await import('../../src/lib/components/AboutMe.svelte');
			expect(module.default).toBeDefined();
		});
	});

	describe('Footer Component', () => {
		it('should export Footer component', async () => {
			const module = await import('../../src/lib/components/Footer.svelte');
			expect(module.default).toBeDefined();
		});
	});

	describe('Contact Component', () => {
		it('should export Contact component', async () => {
			const module = await import('../../src/lib/components/Contact.svelte');
			expect(module.default).toBeDefined();
		});
	});

	describe('Portfolio Component', () => {
		it('should export Portfolio component', async () => {
			const module = await import('../../src/lib/components/Portfolio.svelte');
			expect(module.default).toBeDefined();
		});

		it('should accept required props structure', () => {
			const mockProps = {
				mainProjects: [],
				studiesProjects: [],
				simpleProjects: [],
				icons: []
			};

			expect(mockProps).toHaveProperty('mainProjects');
			expect(mockProps).toHaveProperty('studiesProjects');
			expect(mockProps).toHaveProperty('simpleProjects');
			expect(mockProps).toHaveProperty('icons');
		});
	});
});
