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

    console.log("mainProjects: ", mainProjects, " studiesProjects: ", studiesProjects, " simpleProjects: ", simpleProjects, " icons: ", icons, "")
</script>

<div id="portfolio" class="mx-8 my-24">
    <h3 class="text-4xl uppercase text-main">Portfolio</h3>

    <h4 class=" my-4 text-3xl text-darkGray">Fullstack projects</h4>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-12">
        {#each mainProjects as project (project.name)}
            <ProjectCard {project} {icons}/>
        {/each}
    </div>
    <h4 class=" my-4 text-3xl text-darkGray">Studies projects</h4>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-12">
        {#each studiesProjects as project (project.name)}
            <ProjectCard {project} {icons}/>
        {/each}
    </div>
    <h4 class=" my-4 text-3xl text-darkGray">Simple websites</h4>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-12">
        {#each simpleProjects as project (project.name)}
            <ProjectCard {project} {icons}/>
        {/each}
    </div>
</div>
