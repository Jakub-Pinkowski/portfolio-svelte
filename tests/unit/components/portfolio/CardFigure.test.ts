import { describe, expect, it } from 'vitest';
import CardFigure from '$lib/components/portfolio/CardFigure.svelte';
import { render } from 'svelte/server';
import { mockProjectComplete, mockProjectMinimal } from '$tests/setup/fixtures';

describe('CardFigure Component SSR', () => {
	it('should render project image with correct attributes', () => {
		const { body } = render(CardFigure, {
			props: { project: mockProjectMinimal }
		});

		expect(body).toContain('src="' + mockProjectMinimal.img + '"');
		expect(body).toContain('alt="Screenshot of ' + mockProjectMinimal.name + ' project"');
	});

	it('should link to project.src if available', () => {
		const { body } = render(CardFigure, {
			props: { project: mockProjectComplete }
		});

		expect(body).toContain('href="' + mockProjectComplete.src + '"');
		expect(body).toContain(
			'aria-label="' + mockProjectComplete.name + ' - Open website (opens in a new tab)"'
		);
	});

	it('should link to project.github if project.src is not available', () => {
		const { body } = render(CardFigure, {
			props: { project: mockProjectMinimal }
		});

		expect(body).toContain('href="' + mockProjectMinimal.github + '"');
		expect(body).toContain(
			'aria-label="' + mockProjectMinimal.name + ' - Open GitHub repository (opens in a new tab)"'
		);
	});

	it('should render project label and color if provided', () => {
		const { body } = render(CardFigure, {
			props: { project: mockProjectComplete }
		});

		// mockProjectComplete has label: 'Featured' and labelColor: '#ff0000'
		expect(body).toContain('Featured');
		expect(body).toContain('style="background-color: #ff0000"');
		expect(body).toContain('aria-label="Project label: Featured"');
	});

	it('should not render label if not provided', () => {
		const { body } = render(CardFigure, {
			props: { project: mockProjectMinimal }
		});

		expect(body).not.toContain('<mark');
	});
});
