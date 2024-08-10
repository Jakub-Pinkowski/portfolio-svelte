<script lang="ts">
	import type { Project, Icon } from '$lib/types';
	import FlagshipProject from './FlagshipProject.svelte';

	import github_icon from '$lib/assets/icons/github.png';
	import globe_icon from '$lib/assets/icons/globe.png';

	export let projects: Project[] = [];
	export let icons: Icon[] = [];

	const getIconSrc = (technology: string) => {
		const icon = icons.find((icon) => icon.name === technology);
		return icon ? icon.src : '';
	};
</script>

<div id="portfolio" class="mx-8 my-24">
	<h3 class="text-4xl uppercase text-main">Portfolio</h3>
	<FlagshipProject {getIconSrc} />
	<h4 class=" my-4 text-3xl text-darkGray">Fullstack projects</h4>
	<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
		{#each projects as project (project.id)}
			<div
				class="card transform bg-base-100 shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:opacity-90"
			>
				<figure>
					<a href={project.src} target="_blank" class="w-full">
						<img class="h-52 w-full object-cover md:h-72" src={project.img} alt="Shoes" />
					</a>
				</figure>
				<div class="card-body">
					<h2 class="card-title my-2 text-2xl">{project.name}</h2>
					<p class="my-2 text-lg">{project.description}</p>
					<p class="my-2 text-lg">{project.technologiesDescription}</p>
					<div class="flex">
						{#each project.technologies as technology (technology)}
							<img
								class="mx-2 hidden h-8 w-8 first:ml-0 md:block"
								src={getIconSrc(technology)}
								alt={technology}
							/>
						{/each}
					</div>
					<div class="card-actions my-4 w-full justify-end md:justify-between">
						<a class="my-button" href={project.github} target="_blank">
							<img class="mx-2 h-8 w-8" src={github_icon} alt="github" />
							View Code
						</a>
						<a class="my-button" href={project.src} target="_blank">
							<img class="mx-2 h-8 w-8" src={globe_icon} alt="globe" />
							Visit Website
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>