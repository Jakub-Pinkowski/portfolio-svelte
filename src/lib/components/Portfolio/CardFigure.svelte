<script lang="ts">
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<figure>
	<a href={project.src ? project.src : project.github} target="_blank" class="w-full">
		<img
			class="h-52 w-full rounded-t-xl object-cover lg:h-72 lg:transition-transform lg:duration-500 lg:ease-in-out lg:hover:scale-110 lg:hover:-rotate-3 lg:hover:opacity-80"
			src={project.img}
			alt={project.name}
		/>
		{#if project.label}
			<div class="project-label" style="background-color: {project.labelColor}">
				{project.label}
			</div>
		{/if}
	</a>
</figure>

<style>
	.project-label {
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 8px 0 0 0;
		padding: 0.5rem 1rem;
		font-weight: bold;
		color: black;
	}
</style>
