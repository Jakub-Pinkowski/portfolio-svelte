<script lang="ts">
    import type {Icon, Project} from '$lib/types';
    import CardActions from '$lib/components/Portfolio/CardActions.svelte';
    import CardAccordion from '$lib/components/Portfolio/CardAccordion.svelte';
    import CardDescription from '$lib/components/Portfolio/CardDescription.svelte';
    import CardFigure from '$lib/components/Portfolio/CardFigure.svelte';

    interface Props {
        project: Project;
        icons: Icon[];
    }

    let {project, icons}: Props = $props();
</script>

<article
        class="card bg-light-gray rounded-t-xl shadow-xl"
        class:relative={project.label}
        style:border-color={project.labelColor ? project.labelColor : ''}
>
    <CardFigure {project}/>
    <div class="card-body gap-4 p-4 lg:p-6">
        <h2 class="card-title text-2xl">{project.name}</h2>
        {#if project.summary}
            <CardAccordion {project}/>
        {:else}
            <CardDescription {project} {icons}/>
        {/if}
        <CardActions {project}/>
    </div>
</article>
