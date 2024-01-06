<script lang="ts">
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '$lib/i18n';

	onMount(() => {
		const userLang = navigator.language;
		if (userLang.startsWith('pl')) {
			locale.set('pl');
		}
	});
</script>

<Navigation />
<slot />

<Footer />
