<script lang="ts">
	import type { Project, Icon } from '$lib/types';
	import jules_art from '$lib/assets/images/jules-art.jpg';
	import github_icon from '$lib/assets/icons/github.png';
	import globe_icon from '$lib/assets/icons/globe.png';

	export let getIconSrc;

	// For testing only
	const project: Project = {
		id: 1,
		name: 'Jules-Art',
		src: 'https://jules-art.com',
		img: jules_art,
		description:
			"Artist's portfolio website designed to showcase her creative work and provide a means for visitors to get in touch with her.",
		technologiesDescription: 'Built with Vue.js, TS, HTML, CSS and Firebase.',
		technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
		github: 'https://github.com/Jakub-Pinkowski/Jules-Art'
	};
</script>

<div>
	<h4 class=" my-4 text-3xl text-darkGray">Flagship project</h4>
	<h5 class=" my-4 text-2xl text-main">E-commerce website</h5>
</div>
