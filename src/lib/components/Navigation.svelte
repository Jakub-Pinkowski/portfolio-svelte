<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	let open: boolean = $state(false)

	interface Link {
		label: string;
		path: string;
	}

	const links: Link[] = [
		{ label: 'Home', path: '/' },
		{ label: 'About Me', path: '#about-me' },
		{ label: 'Portfolio', path: '#portfolio' },
		{ label: 'Contact', path: '#contact' }
	];

	const closeMenu = () => {
		open = false;
	};
</script>

<nav class="fixed right-10 top-10 z-20">
	<Hamburger bind:open --color="#950740" />
</nav>

<!--NOTE: For some unexplained reason if I use #each the flying animation doesn't work-->
{#if open}
	<div class="fixed inset-x-0 top-0 z-10 bg-darkGray text-light">
		<div class="text-center text-3xl tracking-wide">
			<a
				href={links[0].path}
				class="block cursor-pointer py-4 hover:underline md:mx-96"
				onclick={closeMenu}
				in:fly={{ y: -15, delay: 50 }}
			>
				{links[0].label}
			</a>
			<a
				href={links[1].path}
				class="block cursor-pointer py-4 hover:underline md:mx-96"
				onclick={closeMenu}
				in:fly={{ y: -15, delay: 100 }}
			>
				{links[1].label}
			</a>
			<a
				href={links[2].path}
				class="block cursor-pointer py-4 hover:underline md:mx-96"
				onclick={closeMenu}
				in:fly={{ y: -15, delay: 150 }}
			>
				{links[2].label}
			</a>
			<a
				href={links[3].path}
				class="block cursor-pointer py-4 hover:underline md:mx-96"
				onclick={closeMenu}
				in:fly={{ y: -15, delay: 200 }}
			>
				{links[3].label}
			</a>
		</div>

		<hr
			class=" mx-auto w-full md:w-1/2"
			in:scale={{ duration: 500, easing: quadOut, opacity: 1 }}
		/>
	</div>
{/if}
