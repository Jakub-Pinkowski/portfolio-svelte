import { describe, expect, it } from 'vitest';
import { mainProjects } from '$lib/data/mainProjects';
import type { Project } from '$lib/types';

describe('mainProjects', () => {
	it('should be an array', () => {
		expect(Array.isArray(mainProjects)).toBe(true);
	});

	it('should contain at least one project', () => {
		expect(mainProjects.length).toBeGreaterThan(0);
	});

	it('should have valid project structure', () => {
		mainProjects.forEach((project: Project) => {
			expect(project).toHaveProperty('name');
			expect(project).toHaveProperty('img');
			expect(project).toHaveProperty('description');
			expect(project).toHaveProperty('technologies');
			expect(project).toHaveProperty('github');

			expect(typeof project.name).toBe('string');
			expect(typeof project.img).toBe('string');
			expect(typeof project.description).toBe('string');
			expect(Array.isArray(project.technologies)).toBe(true);
			expect(typeof project.github).toBe('string');
		});
	});

	it('should have non-empty required fields', () => {
		mainProjects.forEach((project: Project) => {
			expect(project.name.length).toBeGreaterThan(0);
			expect(project.description.length).toBeGreaterThan(0);
			expect(project.technologies.length).toBeGreaterThan(0);
			expect(project.github.length).toBeGreaterThan(0);
		});
	});

	it('should have valid GitHub URLs', () => {
		mainProjects.forEach((project: Project) => {
			expect(project.github).toMatch(/^https:\/\/github\.com\//);
		});
	});

	it('should have valid src URLs when present', () => {
		mainProjects.forEach((project: Project) => {
			if (project.src) {
				expect(project.src).toMatch(/^https?:\/\//);
			}
		});
	});
});
