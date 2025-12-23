import { describe, expect, it } from 'vitest';
import Portfolio from '$lib/components/Portfolio.svelte';
import { render } from 'svelte/server';
import { createMockProjects } from '$tests/setup/fixtures';

describe('Portfolio Component SSR', () => {
	const mockIcons = [
		{ name: 'React', src: '/icons/react.svg' },
		{ name: 'TypeScript', src: '/icons/ts.svg' }
	];

	const mainProjects = createMockProjects(2);
	const studiesProjects = createMockProjects(3);
	const simpleProjects = createMockProjects(1);

	const props = {
		mainProjects,
		studiesProjects,
		simpleProjects,
		icons: mockIcons
	};

	it('should render the main portfolio section with correct ID', () => {
		const { body } = render(Portfolio, { props });
		expect(body).toContain('id="portfolio"');
		expect(body).toContain('<h2');
		expect(body).toContain('Portfolio</h2>');
	});

	it('should render all three category titles', () => {
		const { body } = render(Portfolio, { props });
		expect(body).toContain('Fullstack projects');
		expect(body).toContain('Studies projects');
		expect(body).toContain('Simple websites');
	});

	it('should render the correct number of projects in each category', () => {
		const { body } = render(Portfolio, { props });

		// Check for project names to verify they are rendered
		mainProjects.forEach((p) => expect(body).toContain(p.name));
		studiesProjects.forEach((p) => expect(body).toContain(p.name));
		simpleProjects.forEach((p) => expect(body).toContain(p.name));

		// Each project is wrapped in an <li>
		// We expect 2 + 3 + 1 = 6 list items for projects
		const liMatches = body.match(/<li class="h-full">/g);
		expect(liMatches).toHaveLength(6);
	});

	it('should render empty categories when no projects are provided', () => {
		const emptyProps = {
			mainProjects: [],
			studiesProjects: [],
			simpleProjects: [],
			icons: mockIcons
		};
		const { body } = render(Portfolio, { props: emptyProps });

		expect(body).toContain('Fullstack projects');
		expect(body).toContain('Studies projects');
		expect(body).toContain('Simple websites');

		const liMatches = body.match(/<li class="h-full">/g);
		expect(liMatches).toBeNull();
	});
});
