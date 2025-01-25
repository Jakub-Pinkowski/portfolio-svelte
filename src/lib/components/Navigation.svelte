<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	let open: boolean = $state(false);

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

<nav class="fixed top-10 right-10 z-20">
	<Hamburger bind:open --color="#950740" />
</nav>

{#if open}
	<div
		class="bg-dark-gray text-light fixed inset-x-0 top-0 z-10"
		transition:fly={{ y: -100, duration: 500, easing: quadOut }}
	>
		<div class="text-center text-3xl tracking-wide">
			{#each links as { label, path }}
				<a
					href={path}
					class="block cursor-pointer py-4 hover:underline lg:mx-96"
					onclick={closeMenu}
				>
					{label}
				</a>
			{/each}
		</div>

		<hr
			class="mx-auto w-full border-t-2 lg:w-1/3"
			in:scale={{ duration: 500, easing: quadOut, opacity: 1 }}
			out:scale={{ duration: 500, easing: quadOut, opacity: 0 }}
		/>
	</div>
{/if}
