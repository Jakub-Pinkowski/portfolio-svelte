<script lang="ts">
    import github_icon from '$lib/assets/icons/github.png';
    import globe_icon from '$lib/assets/icons/globe.png';

    import type {Project, Icon} from '$lib/types';

    let {project, icons}: { project: Project; icons: Icon[] } = $props();

    const getIconSrc = (technology: string) => {
        const icon = icons.find((icon) => icon.name === technology);
        return icon ? icon.src : '';
    };
</script>

<!--TODO: Fix the cursor issue for the whole website-->

<div
        class="card bg-base-100 shadow-xl"
        class:border-2={project.label}
        class:relative={project.label}
        style:border-color={project.labelColor ? project.labelColor : ''}
>

    <figure>
        <a href={project.src ? project.src : project.github} target="_blank"
           class="w-full">
            <img
                    class="h-52 w-full rounded-t-[16px] object-cover md:h-72 lg:duration-500 lg:ease-in-out lg:transition-transform lg:hover:opacity-80 lg:hover:-rotate-3 lg:hover:scale-110"
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
    <div class="cad-body gap-4 p-4 lg:p-8">
        <h2 class="card-title text-2xl">{project.name}</h2>
        <p class="text-justify text-lg">Short description goes here</p>
        <div tabindex="-1" class="collapse collapse-arrow rounded-box">
            <input type="checkbox"/>
            <div class="collapse-title px-0 text-xl">
                View more
            </div>
            <div class="collapse-content px-0">
                <p class="text-justify text-lg">{project.description}</p>
                {#if project.subDescription}
                    <p class="text-justify text-lg font-bold text-dark">{project.subDescription}</p>
                {/if}
                <p class="text-lg">{project.technologiesDescription}</p>
                <!-- Technologies Icons -->
                <div class="mt-4 md:flex">
                    {#each project.technologies as technology (technology)}
                        <img class="mx-2 block h-8 w-8 first:ml-0" src={getIconSrc(technology)} alt={technology}/>
                    {/each}
                </div>
            </div>
        </div>
        <div class="card-actions mt-2 w-full justify-end gap-4 md:justify-between">
            <a class="my-button" href={project.github} target="_blank">
                <img class="mx-2 h-4 w-4 lg:h-8 lg:w-8" src={github_icon} alt="github"/>
                View Code
            </a>
            {#if project.src}
                <a class="my-button" href={project.src} target="_blank">
                    <img class="mx-2 h-4 w-4 lg:h-8 lg:w-8" src={globe_icon} alt="globe"/>
                    Visit Website
                </a>
            {/if}
        </div>
    </div>
</div>

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
