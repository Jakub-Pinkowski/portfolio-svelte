<script lang="ts">
	import type { Project, Icon } from '$lib/types';
	import e_commerce from '$lib/assets/images/e-commerce.jpg';
	import github_icon from '$lib/assets/icons/github.png';
	import globe_icon from '$lib/assets/icons/globe.png';

	export let getIconSrc;

	const project = {
		name: 'E-commerce website',
		src: 'https://commerce-website-psi.vercel.app',
		img: e_commerce,
		description: '',
		features: [
			'View, filter and sort all products',
			'Add products to cart and wishlist',
			"View all products' details on dedicated product page",
			"Contact the website's owner via contact form",
			'Site-wide search functionality'
		],
		technologiesDescription:
			'Built with Svelte, SvelteKit, TS, HTML, CSS, Tailwind, SQL and Vercel.',
		technologies: ['svelte', 'sveltekit', 'ts', 'html', 'css', 'tailwind', 'postgresql', 'vercel']
	};
</script>

<div>
	<h4 class=" my-4 text-3xl text-darkGray">Flagship project</h4>
	<h5 class=" my-4 text-2xl text-main">{project.name}</h5>
	<div
		class="card transform bg-base-100 shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:opacity-90"
	>
		<figure>
			<a href={project.src} target="_blank" class="w-full">
				<img class="h-52 w-full object-cover md:h-72" src={project.img} alt="Shoes" />
			</a>
		</figure>
		<div class="card-body">
			<h2 class="card-title my-2 text-2xl">{project.name}</h2>
			<p class="my-2 text-lg">{project.description}</p>
			<p class="my-2 text-lg">{project.technologiesDescription}</p>
			<div class="flex">
				{#each project.technologies as technology (technology)}
					<img
						class="mx-2 hidden h-8 w-8 first:ml-0 md:block"
						src={getIconSrc(technology)}
						alt={technology}
					/>
				{/each}
			</div>
			<div class="card-actions my-4 w-full justify-end md:justify-between">
				<a class="my-button" href={project.src} target="_blank">
					<img class="mx-2 h-8 w-8" src={globe_icon} alt="globe" />
					Visit Website
				</a>
			</div>
		</div>
	</div>
</div>
