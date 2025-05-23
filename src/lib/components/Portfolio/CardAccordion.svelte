<script lang="ts">
    import type {Project} from '$lib/types';

    let {project}: { project: Project } = $props();

    function handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        target.setAttribute('aria-expanded', target.checked.toString());
    }
</script>

<p class="grow-0 text-justify text-lg">{project.summary}</p>
<div
        class="collapse-arrow border-light collapse rounded-lg border-t-4 border-l-4 shadow-md transition-all duration-300 lg:hover:shadow-xl"
>
    <input 
        id="collapse-{project.name.toLowerCase().replace(/\s+/g, '-')}" 
        name="collapse-{project.name}" 
        type="checkbox"
        aria-expanded="false"
        aria-controls="content-{project.name.toLowerCase().replace(/\s+/g, '-')}"
        onchange={handleChange}
    />
    <label 
        for="collapse-{project.name.toLowerCase().replace(/\s+/g, '-')}" 
        class="collapse-title text-dark-gray px-4 py-3 text-lg font-semibold cursor-pointer"
    >
        More info
    </label>
    <div
        class="collapse-content flex flex-col gap-4 px-4"
    >
        <h3 class="border-t-2 border-t-gray-300 pt-2 text-lg font-semibold">Description:</h3>
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
