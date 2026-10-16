<script lang="ts">
	import type { Icon, Project } from '#lib/types.js';

	interface Props {
		project: Project;
		icons: Icon[];
	}

	let { project, icons }: Props = $props();

	const getIconSrc = (technology: string) => {
		const icon = icons.find((icon) => icon.name === technology);
		return icon ? icon.src : '';
	};
</script>

<p class="text-justify text-lg">{project.description}</p>
<p class="text-lg">{project.technologiesDescription}</p>
<ul class="hidden list-none p-0 lg:flex">
	{#each project.technologies as technology (technology)}
		<li class="mr-2 flex items-center">
			<img class="h-8 w-8" src={getIconSrc(technology)} alt="" aria-hidden="true" />
		</li>
	{/each}
</ul>
