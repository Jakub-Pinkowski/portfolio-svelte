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

import type { Website, Project } from '$lib/types';

export const load = (async () => {
	return {
		websites: [] as Website[],
		projects: [
			{
				id: 1,
				name: 'Jules-Art',
				src: 'https://jules-art.com',
				img: jules_art,
				description:
					"Artist's portfolio website designed to showcase her creative work and provide a means for visitors to get in touch with her.",
				technologiesDescription: 'Built with Vue.js, TS, HTML, CSS and Firebase.',
				technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Jules-Art'
			},
			{
				id: 2,
				name: 'Blogging Platform',
				src: 'https://blogging-platform-steel.vercel.app',
				img: blogging_platform,
				description:
					"Blogging platform where you can view and like all users' posts, create your own account, and manage your own posts.",
				technologiesDescription: 'Built with React, Next, JS, HTML, CSS, Firebase and Vercel.',
				technologies: ['react', 'next', 'js', 'html', 'css', 'firebase', 'vercel'],
				github: 'https://github.com/Jakub-Pinkowski/Blogging-Platform'
			},
			{
				id: 3,
				name: 'Links Page',
				src: 'https://links-page-rosy.vercel.app',
				img: links_page,
				description:
					'Links page that allows you to create an account, add your links to social media and share them with others. Inspired by Linktree.',
				technologiesDescription:
					'Built with Svelte, SvelteKit, TS, HTML, CSS, Tailwind, Firebase and Vercel.',
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
				name: 'Habit Tracker',
				src: 'http://pinkowskijakub.eu.pythonanywhere.com',
				img: habit_tracker,
				description:
					'Habit Tracker website that allows you to track your habits. You can add, edit and delete your entries.',
				technologiesDescription: 'Built with Python, SQlite, JS, HTML and CSS.',
				technologies: ['python', 'sqlite', 'js', 'html', 'css'],
				github: 'https://github.com/Jakub-Pinkowski/cs50_final_project'
			},

			{
				id: 5,
				name: 'Meals App',
				src: 'https://react-counter-64e25.web.app',
				img: meals,
				description: 'Meals app that allows you to add meals to your cart and order them.',
				technologiesDescription: 'Built with React, JS, HTML, CSS and Firebase.',
				technologies: ['react', 'js', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/react-meals'
			},
			{
				id: 6,
				name: 'Weather App',
				src: 'https://weather-app-11d00.web.app',
				img: weather,
				description:
					'Weather app that allows you to check the weather in your city and add it to your favourites.',
				technologiesDescription: 'Built with Vue.js, TS, HTML, CSS (Tailwind) and Firebase.',
				technologies: ['vue', 'ts', 'html', 'css', 'tailwind', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Weather-App'
			},
			{
				id: 7,
				name: 'Travel Blog',
				src: 'https://travel-blog-9cc00.web.app',
				img: travel_blog,
				description: 'Travel blog website. The admin can add posts and images.',
				technologiesDescription: 'Built with Vue.js, TS, HTML, CSS and Firebase.',
				technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Travel-Blog'
			},
			{
				id: 8,
				name: 'TODO App',
				src: 'https://todo-app-5ce36.web.app',
				img: todo,
				description: 'Simple TODO app that allows you to add, edit and delete your tasks.',
				technologiesDescription: 'Built with Vue.js, TS, HTML, CSS and Firebase.',
				technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Todo-App'
			},
			{
				id: 9,
				name: 'Coaching Platform',
				src: 'https://vue-udemy-section16.web.app',
				img: coach,
				description:
					'Find a coach website that allows you to and register as a coach or find a coach and contact them.',
				technologiesDescription: 'Built with Vue.js, JS, HTML, CSS and Firebase.',
				technologies: ['vue', 'js', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/vue-udemy'
			},
			{
				id: 10,
				name: 'Investment Calculator',
				src: 'https://investment-calculator-28479.web.app',
				img: investment_calculator,
				description: 'Investment calculator that allows you to calculate your investment income.',
				technologiesDescription: 'Built with React, JS, HTML, CSS and Firebase.',
				technologies: ['react', 'js', 'html', 'css', 'firebase'],
				github: 'https://github.com/Jakub-Pinkowski/investment-calculator'
			}
		] as Project[]
	};
}) satisfies PageLoad;
