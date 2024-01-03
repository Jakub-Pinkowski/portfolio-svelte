<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	let open: boolean = false;
</script>

<div class="fixed right-10 top-10 z-20">
	<Hamburger bind:open --color="#950740" />
</div>

{#if open}
	<div class="fixed inset-x-0 top-0 z-10 bg-darkGray text-light">
		<div class="text-center text-3xl tracking-wide">
			{#each ['Home', 'Example', 'About', 'Contact'] as link, i}
				<p
					class="mx-auto w-max cursor-pointer py-4 hover:underline"
					transition:fly={{ y: -15, delay: 50 * i }}
				>
					{link}
				</p>
			{/each}
		</div>

		<hr class=" mx-auto w-1/2" transition:scale={{ duration: 500, easing: quadOut, opacity: 1 }} />
	</div>
{/if}

<style>
</style>
