<script lang="ts">
	import ProjectCard from '$lib/components/Portfolio/ProjectCard.svelte';

	import type { Project, Icon } from '$lib/types';

	interface Props {
		mainProjects: Project[];
		studiesProjects: Project[];
		simpleProjects: Project[];
		icons: Icon[];
	}

	interface Category {
		title: string;
		projects: Project[];
	}

	let { mainProjects, studiesProjects, simpleProjects, icons }: Props = $props();

	const categories: Category[] = [
		{ title: 'Fullstack projects', projects: mainProjects },
		{ title: 'Studies projects', projects: studiesProjects },
		{ title: 'Simple websites', projects: simpleProjects }
	];
</script>

<div id="portfolio" class="bg-dark-gray px-8 py-14 lg:py-24">
	<h2 class="text-light mb-8 text-4xl uppercase">Portfolio</h2>

	{#each categories as { title, projects } (title)}
		<section class="my-16 lg:rounded-lg">
			<h3 class="text-light-gray mb-8 text-3xl">{title}</h3>
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:gap-12">
				{#each projects as project (project.name)}
					<ProjectCard {project} {icons} />
				{/each}
			</div>
		</section>
	{/each}
</div>
