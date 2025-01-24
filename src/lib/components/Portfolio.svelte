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

<div id="portfolio" class="mx-8 my-14 lg:my-24">
    <h2 class="text-4xl uppercase text-main mb-8">Portfolio</h2>

    {#each categories as {title, projects} (title)}
        <section class="my-8 md:p-8 md:rounded-lg md:shadow-md md:bg-light-gray md:my-16">
            <!-- TODO: Replace h4 with some other tag-->
            <h3 class="text-3xl text-dark-gray mb-8">{title}</h3>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3 2xl:gap-12">
                {#each projects as project (project.name)}
                    <ProjectCard {project} {icons}/>
                {/each}
            </div>
        </section>
    {/each}
</div>