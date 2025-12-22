import { describe, expect, it } from 'vitest';
import CardAccordion from '$lib/components/portfolio/CardAccordion.svelte';
import { render } from 'svelte/server';
import { mockProjectComplete, mockProjectMinimal } from '../../../setup/fixtures';

describe('CardAccordion Component SSR', () => {
	it('should render project summary and "More info" label', () => {
		const { body } = render(CardAccordion, {
			props: { project: mockProjectComplete }
		});

		expect(body).toContain(mockProjectComplete.summary);
		expect(body).toContain('More info');
	});

	it('should render project description, features and technologies inside accordion', () => {
		const { body } = render(CardAccordion, {
			props: { project: mockProjectComplete }
		});

		expect(body).toContain('Description:');
		expect(body).toContain(mockProjectComplete.description);
		
		expect(body).toContain('Features:');
		mockProjectComplete.features?.forEach(feature => {
			expect(body).toContain(feature);
		});

		expect(body).toContain('Tech Stack:');
		mockProjectComplete.technologies.forEach(tech => {
			expect(body).toContain(tech);
		});
	});

	it('should not render Features section if project has no features', () => {
		const projectWithoutFeatures = { ...mockProjectMinimal, features: undefined };
		const { body } = render(CardAccordion, {
			props: { project: projectWithoutFeatures }
		});

		expect(body).not.toContain('Features:');
	});

	it('should have correct accessibility attributes', () => {
		const { body } = render(CardAccordion, {
			props: { project: mockProjectComplete }
		});

		const slug = mockProjectComplete.name.toLowerCase().replace(/\s+/g, '-');
		expect(body).toContain(`id="collapse-${slug}"`);
		expect(body).toContain(`aria-controls="content-${slug}"`);
		expect(body).toContain('aria-expanded="false"');
	});
});
