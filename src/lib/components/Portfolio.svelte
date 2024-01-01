<script lang="ts">
	import type { Project, Website } from '$lib/types';

	export let websites: Website[] = [];
	export let projects: Project[] = [];
</script>

<div class="my-24 mx-8 grid grid-cols-4 gap-4">
	<h3 class="col-span-4 text-3xl uppercase text-main">Portfolio</h3>
	<div class="col-span-2">
		<h4 class="my-4 text-2xl text-darkGray">Business websites</h4>
		<div class="grid grid-cols-2 gap-4">
		</div>
	</div>
	<div class="col-span-2">
		<h4 class=" my-4 text-2xl text-darkGray">Fullstack projects</h4>
		<div class="grid grid-cols-2 gap-4">
			{#each projects as project (project.id)}
				<div class="card bg-base-100 shadow-xl">
					<figure>
						<img class="h-48 w-full object-cover" src={project.img} alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title my-2">{project.name}</h2>
						<p class="my-2">{project.description}</p>
						<div class="card-actions my-4 flex w-full place-content-between">
							<button class="test w-2/5">Visit Website</button>
							<button class="test w-2/5">View Code</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.test {
		cursor: pointer;
		position: relative;
		padding: 10px 20px;
		background: white;
		font-size: 24px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		transition: all 1s;
	}
	.test:after,
	.test:before {
		content: ' ';
		width: 10px;
		height: 10px;
		position: absolute;
		border: 0px solid #fff;
		transition: all 1s;
	}
	.test:after {
		top: -1px;
		left: -1px;
		border-top: 3px solid black;
		border-left: 3px solid black;
	}
	.test:before {
		bottom: -1px;
		right: -1px;
		border-bottom: 3px solid black;
		border-right: 3px solid black;
	}
	.test:hover {
		border-top-right-radius: 0px;
		border-bottom-left-radius: 0px;
	}
	.test:hover:before,
	.test:hover:after {
		width: 100%;
		height: 100%;
	}
</style>
