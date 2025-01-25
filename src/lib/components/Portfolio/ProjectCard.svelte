<script lang="ts">
    import type {Project, Icon} from '$lib/types';
    import CardActions from "$lib/components/Portfolio/CardActions.svelte";
    import CardAccordion from "$lib/components/Portfolio/CardAccordion.svelte";
    import CardDescription from "$lib/components/Portfolio/CardDescription.svelte";
    import CardFigure from "$lib/components/Portfolio/CardFigure.svelte";

    let {project, icons}: { project: Project; icons: Icon[] } = $props();
</script>

<div
        class="card bg-light-gray shadow-xl rounded-t-xl"
        class:relative={project.label}
        style:border-color={project.labelColor ? project.labelColor : ''}
>
    <CardFigure project={project}/>
    <div class="card-body gap-4 p-4 lg:p-6">
        <h2 class="card-title text-2xl">{project.name}</h2>
        {#if project.summary}
            <CardAccordion project={project}/>
        {:else}
            <CardDescription project={project} icons={icons}/>
        {/if}
        <CardActions project={project}/>
    </div>
</div>