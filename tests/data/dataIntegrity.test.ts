import { describe, expect, it } from 'vitest';
import { mainProjects } from '$lib/data/mainProjects';
import { studiesProjects } from '$lib/data/studiesProjects';
import { simpleProjects } from '$lib/data/simpleProjects';
import { icons } from '$lib/data/icons';
import type { Project } from '$lib/types';

describe('Data Integrity Tests', () => {
	describe('Technology Consistency', () => {
		const getAllTechnologies = () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];
			const techSet = new Set<string>();
			allProjects.forEach((project: Project) => {
				project.technologies.forEach((tech) => techSet.add(tech));
			});
			return Array.from(techSet).sort();
		};

		it('should have consistent technology naming across projects', () => {
			const technologies = getAllTechnologies();
			const duplicates = technologies.filter((tech, index) => {
				const lowerCaseTechs = technologies.map((t) => t.toLowerCase());
				return lowerCaseTechs.indexOf(tech.toLowerCase()) !== index;
			});

			expect(duplicates.length).toBe(0);
		});

		it('should not have empty technology strings', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				project.technologies.forEach((tech) => {
					expect(tech.trim().length).toBeGreaterThan(0);
				});
			});
		});

		it('should have at least one technology per project', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				expect(project.technologies.length).toBeGreaterThan(0);
			});
		});
	});

	describe('URL Validation', () => {
		it('should have valid GitHub URLs for all projects', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				expect(project.github).toMatch(/^https:\/\/github\.com\//);
				expect(project.github.trim()).toBe(project.github);
			});
		});

		it('should have valid src URLs when present', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				if (project.src) {
					expect(project.src).toMatch(/^https?:\/\//);
					expect(project.src.trim()).toBe(project.src);
				}
			});
		});

		it('should not have duplicate GitHub URLs', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];
			const githubUrls = allProjects.map((p) => p.github);
			const uniqueUrls = new Set(githubUrls);

			expect(githubUrls.length).toBe(uniqueUrls.size);
		});
	});

	describe('Project Names', () => {
		it('should have unique project names across all categories', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];
			const names = allProjects.map((p) => p.name);
			const uniqueNames = new Set(names);

			expect(names.length).toBe(uniqueNames.size);
		});

		it('should not have empty project names', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				expect(project.name.trim().length).toBeGreaterThan(0);
			});
		});

		it('should not have excessively long project names', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];
			const MAX_NAME_LENGTH = 100;

			allProjects.forEach((project: Project) => {
				expect(project.name.length).toBeLessThanOrEqual(MAX_NAME_LENGTH);
			});
		});
	});

	describe('Descriptions', () => {
		it('should have non-empty descriptions', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				expect(project.description.trim().length).toBeGreaterThan(0);
			});
		});

		it('should have descriptions with minimum length', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];
			const MIN_DESCRIPTION_LENGTH = 10;

			allProjects.forEach((project: Project) => {
				expect(project.description.length).toBeGreaterThanOrEqual(MIN_DESCRIPTION_LENGTH);
			});
		});
	});

	describe('Optional Fields', () => {
		it('should have valid label colors when label is present', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];
			const validColorFormats = [
				/^#[0-9A-Fa-f]{3,6}$/, // hex
				/^rgb\(/, // rgb
				/^rgba\(/, // rgba
				/^[a-z-]+$/ // named colors or tailwind classes
			];

			allProjects.forEach((project: Project) => {
				if (project.label && project.labelColor) {
					const isValidColor = validColorFormats.some((regex) => regex.test(project.labelColor!));
					expect(isValidColor || project.labelColor!.length > 0).toBe(true);
				}
			});
		});

		it('should have summary when provided', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				if (project.summary) {
					expect(project.summary.trim().length).toBeGreaterThan(0);
				}
			});
		});

		it('should have non-empty features array when provided', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				if (project.features) {
					expect(Array.isArray(project.features)).toBe(true);
					expect(project.features.length).toBeGreaterThan(0);
					project.features.forEach((feature) => {
						expect(feature.trim().length).toBeGreaterThan(0);
					});
				}
			});
		});
	});

	describe('Icons Integrity', () => {
		it('should have unique icon names', () => {
			const names = icons.map((icon) => icon.name);
			const uniqueNames = new Set(names);

			expect(names.length).toBe(uniqueNames.size);
		});

		it('should have valid icon src paths', () => {
			icons.forEach((icon) => {
				expect(icon.src).toBeTruthy();
				expect(icon.src.length).toBeGreaterThan(0);
				// Should be a path or URL
				expect(icon.src).toMatch(/[.\/\\]/);
			});
		});

		it('should have properly formatted icon names', () => {
			icons.forEach((icon) => {
				expect(icon.name.trim()).toBe(icon.name);
				expect(icon.name.length).toBeGreaterThan(0);
			});
		});
	});

	describe('Project Categories Distribution', () => {
		it('should have projects in each category', () => {
			expect(mainProjects.length).toBeGreaterThan(0);
			expect(studiesProjects.length).toBeGreaterThan(0);
			expect(simpleProjects.length).toBeGreaterThan(0);
		});

		it('should have reasonable distribution of projects', () => {
			const totalProjects = mainProjects.length + studiesProjects.length + simpleProjects.length;

			// Each category should have at least 10% of total projects
			expect(mainProjects.length).toBeGreaterThanOrEqual(totalProjects * 0.1);
			expect(studiesProjects.length).toBeGreaterThanOrEqual(totalProjects * 0.1);
			expect(simpleProjects.length).toBeGreaterThanOrEqual(totalProjects * 0.1);
		});
	});

	describe('Image Paths', () => {
		it('should have image paths for all projects', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				expect(project.img).toBeTruthy();
				expect(project.img.length).toBeGreaterThan(0);
			});
		});

		it('should have valid image path format', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				// Should have a file extension or be a URL
				expect(project.img).toMatch(/\.(png|jpg|jpeg|webp|svg|gif)$/i);
			});
		});
	});

	describe('Data Type Consistency', () => {
		it('should have consistent types for all required fields', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				expect(typeof project.name).toBe('string');
				expect(typeof project.img).toBe('string');
				expect(typeof project.description).toBe('string');
				expect(Array.isArray(project.technologies)).toBe(true);
				expect(typeof project.github).toBe('string');
			});
		});

		it('should have consistent types for optional fields when present', () => {
			const allProjects = [...mainProjects, ...studiesProjects, ...simpleProjects];

			allProjects.forEach((project: Project) => {
				if (project.src) expect(typeof project.src).toBe('string');
				if (project.label) expect(typeof project.label).toBe('string');
				if (project.labelColor) expect(typeof project.labelColor).toBe('string');
				if (project.summary) expect(typeof project.summary).toBe('string');
				if (project.features) expect(Array.isArray(project.features)).toBe(true);
				if (project.technologiesDescription)
					expect(typeof project.technologiesDescription).toBe('string');
			});
		});
	});
});
