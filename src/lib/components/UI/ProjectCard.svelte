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
    <div class="card-body gap-4 p-4 lg:p-6">
        <h2 class="card-title text-2xl">{project.name}</h2>
        {#if project.summary}
            <p class="text-justify text-lg flex-grow-0">{project.summary}</p>
            <div tabindex="-1"
                 class="collapse collapse-arrow border-l-4 border-t-4 border-light shadow-md bg-white rounded-lg transition-all duration-300">
                <input type="checkbox"/>
                <div class="collapse-title text-lg font-semibold px-4 py-3">
                    Technical info
                </div>
                <div class="collapse-content px-4 bg-gray-50 flex flex-col gap-4">
                    <h3 class="text-lg font-semibold">Description:</h3>
                    <p class="text-justify text-base">{project.description}</p>
                    {#if project.subDescription}
                        <p class="text-justify text-base font-bold text-gray-700">{project.subDescription}</p>
                    {/if}
                    {#if project.features}
                        <h3 class="text-lg font-semibold">Features:</h3>
                        <ul class="list-disc ps-8">
                            {#each project.features as feature (feature)}
                                <li>{feature}</li>
                            {/each}
                        </ul>
                    {/if}
                    <h3 class="text-lg font-semibold">Tech Stack:</h3>
                    <ul class="list-disc ps-8">
                        {#each project.technologies as technology (technology)}
                            <li>{technology}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        {:else}
            <p class="text-justify text-lg">{project.description}</p>
            <p class="text-lg">{project.technologiesDescription}</p>
            <div class="hidden md:flex">
                {#each project.technologies as technology (technology)}
                    <img class="mx-2 block h-8 w-8 first:ml-0" src={getIconSrc(technology)} alt={technology}/>
                {/each}
            </div>
        {/if}
        <div class="card-actions flex-col mt-2 w-full justify-end gap-4 md:flex-row md:justify-between">
            <a class="my-button" href={project.github} target="_blank">
                <img class="mx-2 h-8 w-8" src={github_icon} alt="github"/>
                View Code
            </a>
            {#if project.src}
                <a class="my-button" href={project.src} target="_blank">
                    <img class="mx-2 h-8 w-8" src={globe_icon} alt="globe"/>
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
