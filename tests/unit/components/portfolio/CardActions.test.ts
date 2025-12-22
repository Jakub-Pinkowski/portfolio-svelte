import { describe, expect, it } from 'vitest';
import CardActions from '$lib/components/portfolio/CardActions.svelte';
import { render } from 'svelte/server';
import { mockProjectComplete, mockProjectMinimal } from '../../../setup/fixtures';

describe('CardActions Component SSR', () => {
	it('should render GitHub link for all projects', () => {
		const { body } = render(CardActions, {
			props: { project: mockProjectMinimal }
		});

		expect(body).toContain('href="' + mockProjectMinimal.github + '"');
		expect(body).toContain('View Code');
		expect(body).toContain('aria-label="View ' + mockProjectMinimal.name + ' code on GitHub (opens in a new tab)"');
	});

	it('should render website link only if project.src is provided', () => {
		// Case 1: Project with src
		const { body: bodyWithSrc } = render(CardActions, {
			props: { project: mockProjectComplete }
		});
		expect(bodyWithSrc).toContain('href="' + mockProjectComplete.src + '"');
		expect(bodyWithSrc).toContain('Visit Website');
		expect(bodyWithSrc).toContain('aria-label="Visit ' + mockProjectComplete.name + ' website (opens in a new tab)"');

		// Case 2: Project without src
		const { body: bodyWithoutSrc } = render(CardActions, {
			props: { project: mockProjectMinimal }
		});
		expect(bodyWithoutSrc).not.toContain('Visit Website');
	});

	it('should have correct link attributes for external links', () => {
		const { body } = render(CardActions, {
			props: { project: mockProjectComplete }
		});

		const links = body.match(/<a[^>]*>/g);
		links?.forEach(link => {
			expect(link).toContain('rel="noopener noreferrer"');
			expect(link).toContain('target="_blank"');
		});
	});
});
