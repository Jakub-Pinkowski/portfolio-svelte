import { describe, expect, it } from 'vitest';
import CardDescription from '$lib/components/portfolio/CardDescription.svelte';
import { render } from 'svelte/server';
import { mockProjectComplete } from '../../../setup/fixtures';

describe('CardDescription Component SSR', () => {
	const mockIcons = [
		{ name: 'React', src: '/icons/react.svg' },
		{ name: 'TypeScript', src: '/icons/ts.svg' }
	];

	it('should render project description and technologies description', () => {
		const { body } = render(CardDescription, {
			props: {
				project: mockProjectComplete,
				icons: mockIcons
			}
		});

		expect(body).toContain(mockProjectComplete.description);
		if (mockProjectComplete.technologiesDescription) {
			expect(body).toContain(mockProjectComplete.technologiesDescription);
		}
	});

	it('should render technology icons', () => {
		const { body } = render(CardDescription, {
			props: {
				project: mockProjectComplete,
				icons: mockIcons
			}
		});

		// mockProjectComplete has 'React' and 'TypeScript' in technologies
		expect(body).toContain('src="/icons/react.svg"');
		expect(body).toContain('src="/icons/ts.svg"');
	});

	it('should use empty string for unknown technology icons', () => {
		const projectWithUnknownTech = {
			...mockProjectComplete,
			technologies: ['UnknownTech']
		};

		const { body } = render(CardDescription, {
			props: {
				project: projectWithUnknownTech,
				icons: mockIcons
			}
		});

		expect(body).toContain('src=""');
	});
});
