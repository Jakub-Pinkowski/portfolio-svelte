<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Banner from '../lib/components/Banner.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Banner />
<AboutMe />
<Portfolio projects={data.projects} icons={data.icons} />
<Contact />