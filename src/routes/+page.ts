import type { PageLoad } from './$types';

import jules_art from '$lib/assets/images/jules-art.jpg';
import blogging_platform from '$lib/assets/images/blogging-platform.jpg';
import links_page from '$lib/assets/images/links-page.jpg';
import habit_tracker from '$lib/assets/images/habit-tracker.jpg';
import meals from '$lib/assets/images/meals.jpg';
import weather from '$lib/assets/images/weather.jpg';
import travel_blog from '$lib/assets/images/travel-blog.jpg';
import todo from '$lib/assets/images/todo.jpg';
import coach from '$lib/assets/images/coach.jpg';
import investment_calculator from '$lib/assets/images/investment-calculator.jpg';

import auto_repair from '$lib/assets/images/auto-repair.jpg';
import insurance_agency from '$lib/assets/images/insurance-agency.jpg';

import vueIcon from '$lib/assets/icons/vue.png';
import htmlIcon from '$lib/assets/icons/html.png';
import cssIcon from '$lib/assets/icons/css.png';
import jsIcon from '$lib/assets/icons/js.png';
import tsIcon from '$lib/assets/icons/ts.png';
import pythonIcon from '$lib/assets/icons/python.png';
import firebaseIcon from '$lib/assets/icons/firebase.png';
import sqliteIcon from '$lib/assets/icons/sql.png';
import gitIcon from '$lib/assets/icons/git.png';
import githubIcon from '$lib/assets/icons/github.png';
import globeIcon from '$lib/assets/icons/globe.png';
import tailwindIcon from '$lib/assets/icons/tailwind.png';
import sassIcon from '$lib/assets/icons/sass.png';
import reactIcon from '$lib/assets/icons/react.png';
import nextIcon from '$lib/assets/icons/next.png';
import vercelIcon from '$lib/assets/icons/vercel.png';
import prismaIcon from '$lib/assets/icons/prisma.png';
import postgresqlIcon from '$lib/assets/icons/postgresql.png';
import svelteIcon from '$lib/assets/icons/svelte.png';
import sveltekitIcon from '$lib/assets/icons/sveltekit.png';

import type { Website, Project, Icon } from '$lib/types';

export const load = (async () => {
	return {
		websites: [
			{
				id: 1,
				name: 'Insurance Agency',
				img: insurance_agency,
				description:
					'Insurance agency website designed to showcase the services offered by the company.',
				src: 'https://biznes1.xce.pl/'
			},
			{
				id: 2,
				name: 'Auto Repair Shop',
				img: auto_repair,
				description:
					'Auto repair shop website designed to showcase the services offered by the company.',
				src: 'https://biznes2.xce.pl/'
			}
		] as Website[],
		projects: [
			{
				id: 1,
				nameKey: 'portfolio.projects.project1.name',
				src: 'https://jules-art.com',
				img: jules_art,
				descriptionKey: 'portfolio.projects.project1.description',
				technologiesDescriptionKey: 'portfolio.projects.project1.technologiesDescription',
				technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Jules-Art'
			},
			{
				id: 2,
				nameKey: 'portfolio.projects.project2.name',
				src: 'https://blogging-platform-steel.vercel.app',
				img: blogging_platform,
				descriptionKey: 'portfolio.projects.project2.description',
				technologiesDescriptionKey: 'portfolio.projects.project2.technologiesDescription',
				technologies: ['react', 'next', 'js', 'html', 'css', 'firebase', 'vercel'],
				github: 'https://github.com/Jakub-Pinkowski/Blogging-Platform'
			},
			{
				id: 3,
				nameKey: 'portfolio.projects.project3.name',
				src: 'https://links-page-rosy.vercel.app',
				img: links_page,
				descriptionKey: 'portfolio.projects.project3.description',
				technologiesDescriptionKey: 'portfolio.projects.project3.technologiesDescription',
				technologies: [
					'svelte',
					'sveltekit',
					'ts',
					'html',
					'css',
					'tailwind',
					'firebase',
					'vercel'
				],
				github: 'https://github.com/Jakub-Pinkowski/links-page'
			},
			{
				id: 4,
				nameKey: 'portfolio.projects.project4.name',
				src: 'http://pinkowskijakub.eu.pythonanywhere.com',
				img: habit_tracker,
				descriptionKey: 'portfolio.projects.project4.description',
				technologiesDescriptionKey: 'portfolio.projects.project4.technologiesDescription',
				technologies: ['python', 'sqlite', 'js', 'html', 'css'],
				github: 'https://github.com/Jakub-Pinkowski/cs50_final_project'
			},
			{
				id: 5,
				nameKey: 'portfolio.projects.project5.name',
				src: 'https://react-counter-64e25.web.app',
				img: meals,
				descriptionKey: 'portfolio.projects.project5.description',
				technologiesDescriptionKey: 'portfolio.projects.project5.technologiesDescription',
				technologies: ['react', 'js', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/react-meals'
			},
			{
				id: 6,
				nameKey: 'portfolio.projects.project6.name',
				src: 'https://weather-app-11d00.web.app',
				img: weather,
				descriptionKey: 'portfolio.projects.project6.description',
				technologiesDescriptionKey: 'portfolio.projects.project6.technologiesDescription',
				technologies: ['vue', 'ts', 'html', 'css', 'tailwind', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Weather-App'
			},
			{
				id: 7,
				nameKey: 'portfolio.projects.project7.name',
				src: 'https://travel-blog-9cc00.web.app',
				img: travel_blog,
				descriptionKey: 'portfolio.projects.project7.description',
				technologiesDescriptionKey: 'portfolio.projects.project7.technologiesDescription',
				technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Travel-Blog'
			},
			{
				id: 8,
				nameKey: 'portfolio.projects.project8.name',
				src: 'https://todo-app-5ce36.web.app',
				img: todo,
				descriptionKey: 'portfolio.projects.project8.description',
				technologiesDescriptionKey: 'portfolio.projects.project8.technologiesDescription',
				technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Todo-App'
			},
			{
				id: 9,
				nameKey: 'portfolio.projects.project9.name',
				src: 'https://vue-udemy-section16.web.app',
				img: coach,
				descriptionKey: 'portfolio.projects.project9.description',
				technologiesDescriptionKey: 'portfolio.projects.project9.technologiesDescription',
				technologies: ['vue', 'js', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/vue-udemy'
			},
			{
				id: 10,
				nameKey: 'portfolio.projects.project10.name',
				src: 'https://investment-calculator-28479.web.app',
				img: investment_calculator,
				descriptionKey: 'portfolio.projects.project10.description',
				technologiesDescriptionKey: 'portfolio.projects.project10.technologiesDescription',
				technologies: ['react', 'js', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/investment-calculator'
			}
		] as Project[],

		icons: [
			{
				name: 'vue',
				src: vueIcon
			},
			{
				name: 'html',
				src: htmlIcon
			},
			{
				name: 'css',
				src: cssIcon
			},
			{
				name: 'js',
				src: jsIcon
			},
			{
				name: 'ts',
				src: tsIcon
			},
			{
				name: 'python',
				src: pythonIcon
			},
			{
				name: 'firebase',
				src: firebaseIcon
			},
			{
				name: 'sqlite',
				src: sqliteIcon
			},
			{
				name: 'git',
				src: gitIcon
			},
			{
				name: 'github',
				src: githubIcon
			},
			{
				name: 'globe',
				src: globeIcon
			},
			{
				name: 'tailwind',
				src: tailwindIcon
			},
			{
				name: 'sass',
				src: sassIcon
			},
			{
				name: 'react',
				src: reactIcon
			},
			{
				name: 'next',
				src: nextIcon
			},
			{
				name: 'vercel',
				src: vercelIcon
			},
			{
				name: 'prisma',
				src: prismaIcon
			},
			{
				name: 'postgresql',
				src: postgresqlIcon
			},
			{
				name: 'svelte',
				src: svelteIcon
			},
			{
				name: 'sveltekit',
				src: sveltekitIcon
			}
		] as Icon[]
	};
}) satisfies PageLoad;
