<script lang="ts">
    import ProjectCard from '$lib/components/Portfolio/ProjectCard.svelte';

    import type {Icon, Project} from '$lib/types';

    interface Props {
        mainProjects: Project[];
        studiesProjects: Project[];
        simpleProjects: Project[];
        icons: Icon[];
    }

    interface Category {
        title: string;
        projects: Project[];
    }

    let {mainProjects, studiesProjects, simpleProjects, icons}: Props = $props();

    const categories: Category[] = [
        {title: 'Fullstack projects', projects: mainProjects},
        {title: 'Studies projects', projects: studiesProjects},
        {title: 'Simple websites', projects: simpleProjects}
    ];
</script>

<!--TODO: Make sure the cards are always the same height-->
<section class="bg-dark-gray px-8 py-14 lg:py-24" id="portfolio">
    <h2 class="text-light mb-8 text-4xl uppercase">Portfolio</h2>

    {#each categories as {title, projects} (title)}
        <div class="my-16 lg:rounded-lg" role="region">
            <h3 class="text-light-gray mb-8 text-3xl">{title}</h3>
            <ul class="grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:gap-12 list-none p-0">
                {#each projects as project (project.name)}
                    <li>
                        <ProjectCard {project} {icons}/>
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
</section>
