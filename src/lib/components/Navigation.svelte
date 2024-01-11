<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, t } from 'svelte-i18n';
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import language_icon from '$lib/assets/icons/language.png';

	let open: boolean;

	const links = [
		{ path: '/' },
		{ path: '#about-me' },
		{ path: '#portfolio' },
		{ path: '#contact' }
	];

	const closeMenu = () => {
		open = false;
	};

	const setLanguage = (lang: string) => {
		locale.set(lang);
		closeMenu();
		localStorage.setItem('selectedLanguage', lang);
	};
	onMount(() => {
		const lang = localStorage.getItem('selectedLanguage');
		if (lang) {
			locale.set(lang);
		}
	});
</script>

<nav class="fixed right-10 top-10 z-20">
	<Hamburger bind:open --color="#950740" />
</nav>

{#if open}
	<div class="fixed inset-x-0 top-0 z-10 bg-darkGray text-light">
		<div class="text-center text-3xl tracking-wide">
			<a
				href={links[0].path}
				class="block cursor-pointer py-4 hover:underline md:mx-96"
				on:click={closeMenu}
				in:fly={{ y: -15, delay: 50 }}
			>
				{$t('navigation.home')}
			</a>
			<a
				href={links[1].path}
				class="block cursor-pointer py-4 hover:underline md:mx-96"
				on:click={closeMenu}
				in:fly={{ y: -15, delay: 100 }}
			>
				{$t('navigation.about_me')}
			</a>
			<a
				href={links[2].path}
				class="block cursor-pointer py-4 hover:underline md:mx-96"
				on:click={closeMenu}
				in:fly={{ y: -15, delay: 150 }}
			>
				{$t('navigation.portfolio')}
			</a>
			<a
				href={links[3].path}
				class="block cursor-pointer py-4 hover:underline md:mx-96"
				on:click={closeMenu}
				in:fly={{ y: -15, delay: 200 }}
			>
				{$t('navigation.contact')}
			</a>

			<div>
				<button class="my-4 cursor-pointer hover:underline" on:click={() => setLanguage('en')}>
					English
				</button>
				<img src={language_icon} class="my-4 inline-block" alt="language" />
				<button class="my-4 cursor-pointer hover:underline" on:click={() => setLanguage('pl')}>
					Polski
				</button>
			</div>
		</div>

		<hr
			class=" mx-auto w-full md:w-1/2"
			in:scale={{ duration: 500, easing: quadOut, opacity: 1 }}
		/>
	</div>
{/if}

<style>
</style>
