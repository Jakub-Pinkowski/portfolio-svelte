<script lang="ts">
	import type { Project, Icon } from '$lib/types';
	import ProjectCard from '$lib/components/UI/ProjectCard.svelte';

	export let projects: Project[] = [];
	export let icons: Icon[] = [];

	const getIconSrc = (technology: string) => {
		const icon = icons.find((icon) => icon.name === technology);
		return icon ? icon.src : '';
	};
</script>

<div id="portfolio" class="mx-8 my-24">
	<h3 class="text-4xl uppercase text-main">Portfolio</h3>

	<h4 class=" my-4 text-3xl text-darkGray">Fullstack projects</h4>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-12">
		{#each projects as project (project.id)}
			<ProjectCard {project} {icons} />
		{/each}
	</div>
</div>
