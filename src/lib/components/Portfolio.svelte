<script lang="ts">
	import type { Project, Website, Icon } from '$lib/types';
	import { t } from 'svelte-i18n';
	import coming_soon from '$lib/assets/images/coming_soon.jpg';

	import github_icon from '$lib/assets/icons/github.png';
	import globe_icon from '$lib/assets/icons/globe.png';

	export let websites: Website[] = [];
	export let projects: Project[] = [];
	export let icons: Icon[] = [];

	const getIconSrc = (technology: string) => {
		const icon = icons.find((icon) => icon.name === technology);
		return icon ? icon.src : '';
	};
</script>

<div id="portfolio" class="mx-8 my-16 grid grid-cols-3 gap-4">
	<h3 class="col-span-3 text-4xl uppercase text-main">
		{$t('portfolio.title')}
	</h3>
	<div class="col-span-3 my-8">
		<h4 class="mb-8 text-3xl text-darkGray">
			{$t('portfolio.business_websites')}
		</h4>
		<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
			{#each websites as website (website.id)}
				<div
					class="card transform bg-base-100 shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:opacity-90"
				>
					<figure>
						<a href={website.src} target="_blank" class="w-full">
							<img class="h-52 w-full object-cover md:h-72" src={website.img} alt="Shoes" />
						</a>
					</figure>
					<div class="card-body">
						<h5 class="card-title my-2 text-2xl">{$t(website.nameKey)}</h5>
						<p class="my-2 text-lg">{$t(website.descriptionKey)}</p>
						<div class="card-actions my-4 flex w-full justify-end">
							<a class="my-button" href={website.src} target="_blank">
								<img class="mx-2 h-8 w-8" src={globe_icon} alt="globe" />
								{$t('portfolio.buttons.visit')}
							</a>
						</div>
					</div>
				</div>
			{/each}
			<div
				class="card transform bg-base-100 shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:opacity-90"
			>
				<figure>
					<img class="h-52 w-full object-cover md:h-72" src={coming_soon} alt="Shoes" />
				</figure>
				<div class="card-body">
					<h5 class="card-title my-2 text-2xl">
						{$t('portfolio.coming_soon')}
					</h5>
				</div>
			</div>
		</div>
	</div>
	<div class="col-span-3 mt-16">
		<h4 class="my-8 text-3xl text-darkGray">
			{$t('portfolio.fullstack')}
		</h4>
		<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
			{#each projects as project (project.id)}
				<div
					class="card transform bg-base-100 shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:opacity-90"
				>
					<figure>
						<a href={project.src} target="_blank" class="w-full">
							<img class="h-52 w-full object-cover md:h-72" src={project.img} alt="Shoes" />
						</a>
					</figure>
					<div class="card-body text-justify">
						<h5 class="card-title my-2 text-2xl">{$t(project.nameKey)}</h5>
						<p class="my-2 text-lg">{$t(project.descriptionKey)}</p>
						<p class="my-2 text-lg">
							{$t(project.technologiesDescriptionKey)}
						</p>
						<p class="flex">
							{#each project.technologies as technology (technology)}
								<img
									class="mx-2 hidden h-8 w-8 md:block"
									src={getIconSrc(technology)}
									alt={technology}
								/>
							{/each}
						</p>
						<div class="card-actions my-4 w-full justify-end md:justify-between">
							<a class="my-button" href={project.github} target="_blank">
								<img class="mx-2 h-8 w-8" src={github_icon} alt="github" />
								{$t('portfolio.buttons.view')}
							</a>
							<a class="my-button" href={project.src} target="_blank">
								<img class="mx-2 h-8 w-8" src={globe_icon} alt="globe" />
								{$t('portfolio.buttons.visit')}
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
