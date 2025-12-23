import { describe, expect, it } from 'vitest';
import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
import { render } from 'svelte/server';
import { mockProjectComplete, mockProjectMinimal } from '../../../setup/fixtures';

describe('ProjectCard Component SSR', () => {
	const mockIcons = [
		{ name: 'React', src: '/icons/react.svg' },
		{ name: 'TypeScript', src: '/icons/ts.svg' }
	];

	it('should render a complete project correctly', () => {
		const { body } = render(ProjectCard, {
			props: {
				project: mockProjectComplete,
				icons: mockIcons
			}
		});

		expect(body).toContain(mockProjectComplete.name);
		// The complete project has a summary, so it should render CardAccordion
		// We can't easily check for components in SSR string, but we can check for content
		if (mockProjectComplete.summary) {
			expect(body).toContain(mockProjectComplete.summary);
		}

		expect(body).toContain('href="' + mockProjectComplete.github + '"');
		if (mockProjectComplete.src) {
			expect(body).toContain('href="' + mockProjectComplete.src + '"');
		}
	});

	it('should render a minimal project correctly', () => {
		const { body } = render(ProjectCard, {
			props: {
				project: mockProjectMinimal,
				icons: mockIcons
			}
		});

		expect(body).toContain(mockProjectMinimal.name);
		expect(body).toContain(mockProjectMinimal.description);
		expect(body).toContain('href="' + mockProjectMinimal.github + '"');
		// Minimal project doesn't have src (Visit a Website link)
		expect(body).not.toContain('Visit Website');
	});

	it('should apply label color if provided', () => {
		const { body } = render(ProjectCard, {
			props: {
				project: mockProjectComplete,
				icons: mockIcons
			}
		});

		// mockProjectComplete has the labelColor: '#ff0000'
		expect(body).toContain('style="border-color: #ff0000;"');
	});
});
