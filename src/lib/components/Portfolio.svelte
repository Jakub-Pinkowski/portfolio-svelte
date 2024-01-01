<script lang="ts">
	import type { Project, Website } from '$lib/types';

	import github_icon from '$lib/assets/icons/github.png';
	import globe_icon from '$lib/assets/icons/globe.png';

	export let websites: Website[] = [];
	export let projects: Project[] = [];
</script>

<div class="mx-8 my-24 grid grid-cols-3 gap-4">
	<h3 class="col-span-3 text-3xl uppercase text-main">Portfolio</h3>
	<div class="col-span-3">
		<h4 class="my-4 text-2xl text-darkGray">Business websites</h4>
		<div class="grid grid-cols-3 gap-12">
			{#each websites as website (website.id)}
				<div class="card bg-base-100 shadow-xl">
					<figure>
						<img class="w-full h-72 object-cover" src={website.img} alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title my-2 text-2xl">{website.name}</h2>
						<p class="my-2 text-lg">{website.description}</p>
						<div class="card-actions my-4 flex w-full justify-end">
							<a class="my-button" href={website.src}>
								<img class="mx-2 h-8 w-8" src={globe_icon} alt="globe" />
								Visit Website
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="col-span-3 mt-8">
		<!-- Add margin-top here -->
		<h4 class=" my-4 text-2xl text-darkGray">Fullstack projects</h4>
		<div class="grid grid-cols-3 gap-12">
			{#each projects as project (project.id)}
				<div class="card bg-base-100 shadow-xl">
					<figure>
						<img class="h-72 w-full object-cover" src={project.img} alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title my-2 text-2xl">{project.name}</h2>
						<p class="my-2 text-lg">{project.description}</p>
						<div class="card-actions my-4 w-full justify-between">
							<a class="my-button" href={project.github}>
								<img class="mx-2 h-8 w-8" src={github_icon} alt="github" />
								View Code
							</a>
							<a class="my-button" href={project.src}>
								<img class="mx-2 h-8 w-8" src={globe_icon} alt="globe" />
								Visit Website
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.my-button {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: 13rem;
		position: relative;
		padding: 10px 20px;
		background: #e0aeb5;
		font-size: 20px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		transition: all 1s;
	}
	.my-button:after,
	.my-button:before {
		content: ' ';
		width: 10px;
		height: 10px;
		position: absolute;
		border: 0px solid #fff;
		transition: all 1s;
	}
	.my-button:after {
		top: -1px;
		left: -1px;
		border-top: 3px solid black;
		border-left: 3px solid black;
	}
	.my-button:before {
		bottom: -1px;
		right: -1px;
		border-bottom: 3px solid black;
		border-right: 3px solid black;
	}
	.my-button:hover {
		border-top-right-radius: 0px;
		border-bottom-left-radius: 0px;
	}
	.my-button:hover:before,
	.my-button:hover:after {
		width: 100%;
		height: 100%;
	}
</style>
