<script lang="ts">
    import github_icon from '$lib/assets/icons/github.png';
    import globe_icon from '$lib/assets/icons/globe.png';
    import type {Project} from "$lib/types";

    let {project}: { project: Project;} = $props();

</script>

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