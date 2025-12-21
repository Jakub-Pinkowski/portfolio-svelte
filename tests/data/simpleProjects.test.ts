import { describe, expect, it } from 'vitest';
import { simpleProjects } from '$lib/data/simpleProjects';
import type { Project } from '$lib/types';

describe('simpleProjects', () => {
	it('should be an array', () => {
		expect(Array.isArray(simpleProjects)).toBe(true);
	});

	it('should contain at least one project', () => {
		expect(simpleProjects.length).toBeGreaterThan(0);
	});

	it('should have valid project structure', () => {
		simpleProjects.forEach((project: Project) => {
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
		simpleProjects.forEach((project: Project) => {
			expect(project.name.length).toBeGreaterThan(0);
			expect(project.description.length).toBeGreaterThan(0);
			expect(project.technologies.length).toBeGreaterThan(0);
			expect(project.github.length).toBeGreaterThan(0);
		});
	});

	it('should have valid GitHub URLs', () => {
		simpleProjects.forEach((project: Project) => {
			expect(project.github).toMatch(/^https:\/\/github\.com\//);
		});
	});
});
