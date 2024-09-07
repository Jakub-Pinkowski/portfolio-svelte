<script lang="ts">
	import e_commerce from '$lib/assets/images/e-commerce.jpg';
	import github_icon from '$lib/assets/icons/github.png';
	import globe_icon from '$lib/assets/icons/globe.png';

	export let getIconSrc;

	const project = {
		name: 'E-commerce website',
		src: 'https://commerce-website-psi.vercel.app',
		img: e_commerce,
		description:
			'A fullstack e-commerce website with a wide range of features, such as product filtering, sorting, adding to cart and wishlist, viewing product details and site-wide search functionality.',
		subdescription: 'This website is constanly evolving. New feautres added regularly!',
		features: [
			'View, filter and sort all products',
			'Add products to cart and wishlist',
			"View all products' details on dedicated product page",
			'Site-wide search functionality'
		],
		technologiesDescription:
			'Built with Svelte, SvelteKit, TS, HTML, CSS, Tailwind, SQL and Vercel.',
		technologies: ['svelte', 'sveltekit', 'ts', 'html', 'css', 'tailwind', 'postgresql', 'vercel'],
		github: 'https://github.com/Jakub-Pinkowski/commerce-website'
	};
</script>

<div
	class="card relative transform animate-pulse border-2 bg-base-100 shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:opacity-90"
	style="border-color: #e9c46a;"
>
	<div
		class="absolute left-0 top-0 rounded-tl-[8px] px-4 py-2 font-bold text-black"
		style="background-color: #e9c46a;"
	>
		Flagship Project
	</div>
	<figure>
		<a href={project.src} target="_blank" class="w-full">
			<img
				class="h-52 w-full rounded-t-[16px] object-cover md:h-72"
				src={project.img}
				alt="e-commerce website"
			/>
		</a>
	</figure>
	<div class="card-body gap-4 p-4 lg:p-8">
		<h2 class="card-title text-2xl">{project.name}</h2>
		<p class="text-justify text-lg">{project.description}</p>
		<p class="text-justify text-lg font-bold text-dark">{project.subdescription}</p>
		<p class="text-lg">{project.technologiesDescription}</p>
		<div class="hidden md:flex">
			{#each project.technologies as technology (technology)}
				<img class="mx-2 block h-8 w-8 first:ml-0" src={getIconSrc(technology)} alt={technology} />
			{/each}
		</div>
		<div class="card-actions mt-2 w-full justify-end gap-4 md:justify-between">
			<a class="my-button" href={project.github} target="_blank">
				<img class="mx-2 h-4 w-4 lg:h-8 lg:w-8" src={github_icon} alt="github" />
				View Code
			</a>
			<a class="my-button" href={project.src} target="_blank">
				<img class="mx-2 h-4 w-4 lg:h-8 lg:w-8" src={globe_icon} alt="globe" />
				Visit Website
			</a>
		</div>
	</div>
</div>

<style scoped>
	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.02);
		}
		100% {
			transform: scale(1);
		}
	}
	.animate-pulse {
		animation: pulse 3s infinite;
	}
</style>
