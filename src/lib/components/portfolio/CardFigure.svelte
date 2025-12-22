<script lang="ts">
    import type {Project} from '$lib/types';

    let {project}: { project: Project } = $props();
</script>

<figure>
    <a
            aria-label="{project.name} - Open {project.src ? 'website' : 'GitHub repository'} (opens in a new tab)"
            class="w-full"
            href={project.src ? project.src : project.github}
            rel="noopener noreferrer"
            target="_blank"
    >
        <img
                alt="Screenshot of {project.name} project"
                class="h-52 w-full rounded-t-xl object-cover lg:h-72 lg:transition-transform lg:duration-500 lg:ease-in-out lg:hover:scale-110 lg:hover:-rotate-3 lg:hover:opacity-80"
                src={project.img}
        />
        {#if project.label}
            <mark
                    class="project-label"
                    style="background-color: {project.labelColor}"
                    aria-label="Project label: {project.label}"
            >
                {project.label}
            </mark>
        {/if}
    </a>
</figure>

<style>
    .project-label {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 8px 0 0 0;
        padding: 0.5rem 1rem;
        font-weight: bold;
        color: var(--color-dark-gray);
    }
</style>
