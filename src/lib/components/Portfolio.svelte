<script lang="ts">
    import ProjectCard from '$lib/components/Portfolio/ProjectCard.svelte';

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

    interface Category {
        title: string;
        projects: Project[];
    }

    const categories: Category[] = [
        {title: "Fullstack projects", projects: mainProjects},
        {title: "Studies projects", projects: studiesProjects},
        {title: "Simple websites", projects: simpleProjects}
    ];
</script>

<div id="portfolio" class="mx-8 my-24">
    <h3 class="text-4xl uppercase text-main mb-8">Portfolio</h3>

    {#each categories as {title, projects} (title)}
        <section class="my-16 md:p-8 md:rounded-lg md:shadow-md md:bg-lightGray">
            <h4 class="text-3xl text-darkGray mb-8">{title}</h4>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-12">
                {#each projects as project (project.name)}
                    <ProjectCard {project} {icons}/>
                {/each}
            </div>
        </section>
    {/each}
</div>