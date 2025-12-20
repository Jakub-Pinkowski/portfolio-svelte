import { describe, it, expect } from 'vitest';
import { studiesProjects } from './studiesProjects';
import type { Project } from '$lib/types';

describe('studiesProjects', () => {
	it('should be an array', () => {
		expect(Array.isArray(studiesProjects)).toBe(true);
	});

	it('should contain at least one project', () => {
		expect(studiesProjects.length).toBeGreaterThan(0);
	});

	it('should have valid project structure', () => {
		studiesProjects.forEach((project: Project) => {
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
		studiesProjects.forEach((project: Project) => {
			expect(project.name.length).toBeGreaterThan(0);
			expect(project.description.length).toBeGreaterThan(0);
			expect(project.technologies.length).toBeGreaterThan(0);
			expect(project.github.length).toBeGreaterThan(0);
		});
	});

	it('should have valid GitHub URLs', () => {
		studiesProjects.forEach((project: Project) => {
			expect(project.github).toMatch(/^https:\/\/github\.com\//);
		});
	});
});
