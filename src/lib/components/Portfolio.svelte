<script lang="ts">
	import type { Project, Icon } from '$lib/types';
	import FlagshipProject from './FlagshipProject.svelte';
	// TODO: Export projectcards to a separate component

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

	<h4 class=" my-4 text-3xl text-darkGray">Fullstack projects</h4>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-12">
		<!-- TODO: Edit Flagship project last -->
		<FlagshipProject {getIconSrc} />
		{#each projects as project (project.id)}
			<div
				class="card bg-base-100 shadow-xl transition duration-500 ease-in-out lg:hover:scale-105 lg:hover:opacity-90 {project.name ===
				'Jules-Art'
					? 'relative border-2'
					: ''}"
				style={project.name === 'Jules-Art' ? 'border-color: #8ecae6;' : ''}
			>
				{#if project.name === 'Jules-Art'}
					<div
						class="absolute left-0 top-0 rounded-tl-[8px] px-4 py-2 font-bold text-black"
						style="background-color: #8ecae6;"
					>
						Freelance Project
					</div>
				{/if}
				<figure>
					<a href={project.src} target="_blank" class="w-full">
						<img
							class="h-52 w-full rounded-t-[16px] object-cover md:h-72"
							src={project.img}
							alt="Shoes"
						/>
					</a>
				</figure>
				<div class="card-body gap-4 p-4 lg:p-8">
					<h2 class="card-title text-2xl">{project.name}</h2>
					<p class=" text-justify text-lg">{project.description}</p>
					<p class="text-lg">{project.technologiesDescription}</p>
					<div class="hidden md:flex">
						{#each project.technologies as technology (technology)}
							<img
								class="mx-2 block h-8 w-8 first:ml-0"
								src={getIconSrc(technology)}
								alt={technology}
							/>
						{/each}
					</div>
					<div class="card-actions mt-2 w-full justify-end gap-4 md:justify-between">
						<!-- TODO: Put those elements into a separate component -->
						<a class="my-button" href={project.github} target="_blank">
							<img class="mx-2 h-4 w-4 lg:h-8 lg:w-8" src={github_icon} alt="github" />
							View Code
						</a>
						<a class="my-button" href={project.src} target="_blank">
							<img class="mx-2 h-4 w-4 lg:h-8 lg:w-8" src={globe_icon} alt="globe" />
							Visit Website
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
