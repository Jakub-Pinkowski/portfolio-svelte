<script lang="ts">
    import AboutMe from '$lib/components/AboutMe.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Portfolio from '$lib/components/Portfolio.svelte';
    import Banner from '$lib/components/Banner.svelte';

    import type {PageData} from './$types';

    let {data}: { data: PageData } = $props();
</script>

<Banner/>
<AboutMe/>
<Portfolio
        icons={data.icons}
        mainProjects={data.mainProjects}
        simpleProjects={data.simpleProjects}
        studiesProjects={data.studiesProjects}
/>
<Contact/>
