<script lang="ts">
    import AboutMe from '$lib/components/AboutMe.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Portfolio from '$lib/components/Portfolio.svelte';
    import Banner from '../lib/components/Banner.svelte';

    import type {PageData} from './$types';

    let {data}: { data: PageData } = $props();
</script>

<!--TODO: Go through all the pages and check if I'm using proper h tags-->
<Banner/>
<AboutMe/>
<Portfolio
    mainProjects={data.mainProjects}
    studiesProjects={data.studiesProjects}
    simpleProjects={data.simpleProjects}
    icons={data.icons}/>
<Contact/>
