/**
 * Test fixtures and mock data factories
 */

import type {Project} from '$lib/types';

/**
 * Creates a mock project with default values that can be overridden
 */
export const createMockProject = (overrides: Partial<Project> = {}): Project => {
	return {
		name: 'Test Project',
		github: 'https://github.com/test/project',
		img: '/images/test.webp',
		description: 'A test project description',
		technologies: ['React', 'TypeScript'],
		src: undefined,
		label: undefined,
		labelColor: undefined,
		summary: undefined,
		features: undefined,
		technologiesDescription: undefined,
		...overrides
	};
};

/**
 * Creates multiple mock projects
 */
export const createMockProjects = (count: number): Project[] => {
	return Array.from({ length: count }, (_, i) =>
		createMockProject({
			name: `Test Project ${i + 1}`,
			github: `https://github.com/test/project-${i + 1}`
		})
	);
};

/**
 * Mock project with all optional fields
 */
export const mockProjectComplete: Project = createMockProject({
	name: 'Complete Project',
	src: 'https://example.com',
	label: 'Featured',
	labelColor: '#ff0000',
	summary: 'A complete test project',
	features: ['Feature 1', 'Feature 2'],
	technologiesDescription: 'Built with modern technologies'
});

/**
 * Mock project with minimal fields
 */
export const mockProjectMinimal: Project = createMockProject({
	name: 'Minimal Project',
	github: 'https://github.com/test/minimal',
	img: '/images/minimal.webp',
	description: 'Minimal project',
	technologies: ['JavaScript']
});

/**
 * Mock contact form data
 */
export const createMockFormData = (
	overrides: Partial<{ name: string; email: string; message: string }> = {}
) => {
	return {
		name: 'John Doe',
		email: 'john@example.com',
		message: 'Hello, this is a test message.',
		...overrides
	};
};
