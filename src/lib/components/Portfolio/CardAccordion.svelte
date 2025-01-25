<script lang="ts">
    import type {Project} from "$lib/types";

    let {project}: { project: Project; } = $props();
</script>

<p class="text-justify text-lg grow-0">{project.summary}</p>
<div tabindex="-1"
     class="collapse collapse-arrow border-l-4 border-t-4 border-light shadow-md rounded-lg transition-all duration-300 md:hover:shadow-xl">
    <label class="sr-only" for="collapse-{project.name}"></label>
    <input type="checkbox" id="collapse-{project.name}"/>
    <div class="collapse-title text-lg text-dark-gray font-semibold px-4 py-3">
        More info
    </div>
    <div class="collapse-content px-4 flex flex-col gap-4">
        <h3 class="text-lg font-semibold pt-2 border-t-2 border-t-gray-300">Description:</h3>
        <p class="text-justify text-base">{project.description}</p>
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