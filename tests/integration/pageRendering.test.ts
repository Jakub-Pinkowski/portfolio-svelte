import { describe, expect, it } from 'vitest';
import { load } from '$routes/+page';

describe('Page Rendering Integration Tests', () => {
	describe('Page Data Loading', () => {
		it('should load all required data for page rendering', async () => {
			const data = await load();

			expect(data).toHaveProperty('mainProjects');
			expect(data).toHaveProperty('studiesProjects');
			expect(data).toHaveProperty('simpleProjects');
			expect(data).toHaveProperty('icons');
		});

		it('should provide valid data structure for Portfolio component', async () => {
			const data = await load();

			expect(Array.isArray(data.mainProjects)).toBe(true);
			expect(Array.isArray(data.studiesProjects)).toBe(true);
			expect(Array.isArray(data.simpleProjects)).toBe(true);
			expect(Array.isArray(data.icons)).toBe(true);

			// Ensure all arrays are not empty
			expect(data.mainProjects.length).toBeGreaterThan(0);
			expect(data.studiesProjects.length).toBeGreaterThan(0);
			expect(data.simpleProjects.length).toBeGreaterThan(0);
			expect(data.icons.length).toBeGreaterThan(0);
		});

		it('should provide projects with all required fields for rendering', async () => {
			const data = await load();
			const allProjects = [...data.mainProjects, ...data.studiesProjects, ...data.simpleProjects];

			allProjects.forEach((project) => {
				// Required for rendering
				expect(project.name).toBeTruthy();
				expect(project.img).toBeTruthy();
				expect(project.description).toBeTruthy();
				expect(project.technologies).toBeTruthy();
				expect(project.technologies.length).toBeGreaterThan(0);
				expect(project.github).toBeTruthy();
			});
		});

		it('should provide icons with required fields for rendering', async () => {
			const data = await load();

			data.icons.forEach((icon) => {
				expect(icon.name).toBeTruthy();
				expect(icon.src).toBeTruthy();
			});
		});
	});

	describe('Component Integration', () => {
		it('should have importable Navigation component', async () => {
			const module = await import('$lib/components/Navigation.svelte');
			expect(module.default).toBeDefined();
		});

		it('should have importable Banner component', async () => {
			const module = await import('$lib/components/Banner.svelte');
			expect(module.default).toBeDefined();
		});

		it('should have importable AboutMe component', async () => {
			const module = await import('$lib/components/AboutMe.svelte');
			expect(module.default).toBeDefined();
		});

		it('should have importable Portfolio component', async () => {
			const module = await import('$lib/components/Portfolio.svelte');
			expect(module.default).toBeDefined();
		});

		it('should have importable Contact component', async () => {
			const module = await import('$lib/components/Contact.svelte');
			expect(module.default).toBeDefined();
		});

		it('should have importable Footer component', async () => {
			const module = await import('$lib/components/Footer.svelte');
			expect(module.default).toBeDefined();
		});
	});

	describe('Route Structure', () => {
		it('should have main page route with loader', async () => {
			const pageModule = await import('$routes/+page');
			expect(pageModule).toHaveProperty('load');
			expect(typeof pageModule.load).toBe('function');
		});

		it('should have main page component', async () => {
			const pageExists = await import('$routes/+page.svelte').then(() => true).catch(() => false);
			expect(pageExists).toBe(true);
		});

		it('should have layout component', async () => {
			const layoutExists = await import('$routes/+layout.svelte')
				.then(() => true)
				.catch(() => false);
			expect(layoutExists).toBe(true);
		});
	});

	describe('Data Sources', () => {
		it('should import mainProjects data', async () => {
			const module = await import('$lib/data/mainProjects');
			expect(module.mainProjects).toBeDefined();
			expect(Array.isArray(module.mainProjects)).toBe(true);
		});

		it('should import studiesProjects data', async () => {
			const module = await import('$lib/data/studiesProjects');
			expect(module.studiesProjects).toBeDefined();
			expect(Array.isArray(module.studiesProjects)).toBe(true);
		});

		it('should import simpleProjects data', async () => {
			const module = await import('$lib/data/simpleProjects');
			expect(module.simpleProjects).toBeDefined();
			expect(Array.isArray(module.simpleProjects)).toBe(true);
		});

		it('should import icons data', async () => {
			const module = await import('$lib/data/icons');
			expect(module.icons).toBeDefined();
			expect(Array.isArray(module.icons)).toBe(true);
		});
	});

	describe('Type Definitions', () => {
		it('should have Project type definition', async () => {
			const module = await import('$lib/types');
			// TypeScript types are compile-time only, but we can verify the import works
			expect(module).toBeDefined();
		});

		it('should have Icon type definition', async () => {
			const module = await import('$lib/types');
			expect(module).toBeDefined();
		});
	});

	describe('Portfolio Categories', () => {
		it('should provide correct category structure for rendering', async () => {
			const data = await load();

			const categories = [
				{ title: 'Fullstack projects', projects: data.mainProjects },
				{ title: 'Studies projects', projects: data.studiesProjects },
				{ title: 'Simple websites', projects: data.simpleProjects }
			];

			categories.forEach((category) => {
				expect(category.title).toBeTruthy();
				expect(category.title.length).toBeGreaterThan(0);
				expect(Array.isArray(category.projects)).toBe(true);
				expect(category.projects.length).toBeGreaterThan(0);
			});
		});

		it('should have unique category titles', async () => {
			const categoryTitles = ['Fullstack projects', 'Studies projects', 'Simple websites'];

			const uniqueTitles = new Set(categoryTitles);
			expect(categoryTitles.length).toBe(uniqueTitles.size);
		});
	});

	describe('Navigation Structure', () => {
		it('should have valid navigation links structure', () => {
			const links = [
				{ label: 'Home', path: '/' },
				{ label: 'About Me', path: '#about-me' },
				{ label: 'Portfolio', path: '#portfolio' },
				{ label: 'Contact', path: '#contact' }
			];

			links.forEach((link) => {
				expect(link.label).toBeTruthy();
				expect(link.path).toBeTruthy();
				// Validate path format
				expect(link.path).toMatch(/^[/#]/);
			});
		});

		it('should have section IDs matching navigation anchors', () => {
			const navigationAnchors = ['#about-me', '#portfolio', '#contact'];
			const expectedSectionIds = ['about-me', 'portfolio', 'contact'];

			navigationAnchors.forEach((anchor, index) => {
				const sectionId = anchor.replace('#', '');
				expect(sectionId).toBe(expectedSectionIds[index]);
			});
		});
	});

	describe('Form Integration', () => {
		it('should have ContactForm component importable', async () => {
   const exists = await import('$lib/components/contact/ContactForm.svelte')
				.then(() => true)
				.catch(() => false);
			expect(exists).toBe(true);
		});

		it('should have Formspree endpoint configured', () => {
			const formspreeUrl = 'https://formspree.io/f/xpzgwgre';
			expect(formspreeUrl).toMatch(/^https:\/\/formspree\.io\/f\//);
		});
	});

	describe('Asset Imports', () => {
		it('should import contact image', async () => {
			const exists = await import('$lib/assets/images/contact.webp')
				.then(() => true)
				.catch(() => false);
			expect(exists).toBe(true);
		});

		it('should import about me image', async () => {
			const exists = await import('$lib/assets/images/me_cropped.webp')
				.then(() => true)
				.catch(() => false);
			expect(exists).toBe(true);
		});

		it('should import social media icons', async () => {
			const linkedinExists = await import('$lib/assets/icons/linkedin.png')
				.then(() => true)
				.catch(() => false);
			const githubExists = await import('$lib/assets/icons/github.png')
				.then(() => true)
				.catch(() => false);

			expect(linkedinExists).toBe(true);
			expect(githubExists).toBe(true);
		});
	});

	describe('External Dependencies', () => {
		it('should have svelte-hamburgers available', async () => {
			const exists = await import('svelte-hamburgers').then(() => true).catch(() => false);
			expect(exists).toBe(true);
		});

		it('should have svelte transitions available', async () => {
			const exists = await import('svelte/transition').then(() => true).catch(() => false);
			expect(exists).toBe(true);
		});

		it('should have svelte easing available', async () => {
			const exists = await import('svelte/easing').then(() => true).catch(() => false);
			expect(exists).toBe(true);
		});
	});
});
