<script lang="ts">
	import type { Project, Icon } from '$lib/types';

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
<div class="hidden lg:flex">
	{#each project.technologies as technology (technology)}
		<img class="mx-2 block h-8 w-8 first:ml-0" src={getIconSrc(technology)} alt={technology} />
	{/each}
</div>
