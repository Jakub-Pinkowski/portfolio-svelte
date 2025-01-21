<script lang="ts">
    import ProjectCard from '$lib/components/UI/ProjectCard.svelte';

    import type {Project, Icon} from '$lib/types';

    let {
        mainProjects,
        studiesProjects,
        simpleProjects,
        icons
    }: {
        mainProjects: Project[];
        studiesProjects: Project[];
        simpleProjects: Project[];
        icons: Icon[];
    } = $props();

    const categories = [
        {title: "Fullstack projects", projects: mainProjects},
        {title: "Studies projects", projects: studiesProjects},
        {title: "Simple websites", projects: simpleProjects}
    ];
</script>

<div id="portfolio" class="mx-8 my-24">
    <h3 class="text-4xl uppercase text-main">Portfolio</h3>

    {#each categories as { title, projects } (title)}
        <h4 class="my-10 text-3xl text-darkGray">{title}</h4>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-12">
            {#each projects as project (project.name)}
                <ProjectCard {project} {icons} />
            {/each}
        </div>
    {/each}
</div>