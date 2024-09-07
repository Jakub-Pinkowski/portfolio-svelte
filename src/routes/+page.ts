import type { PageLoad } from './$types';

import e_commerce from '$lib/assets/images/e-commerce.jpg';
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
                id: 0,
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
            },
			{
				id: 1,
				name: 'Jules-Art',
				src: 'https://jules-art.com',
				img: jules_art,
				description:
					"Artist's portfolio website designed to showcase her creative work and provide a means for visitors to get in touch with her. This project was built for a client to meet her specific requirements and aesthetic preferences. The website features a clean and modern design, intuitive navigation, and responsive layout to provide an optimal viewing experience across all devices.",
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
					'A comprehensive blogging platform that allows users to view and like posts from all users, create their own accounts, and manage their own posts. Additionally, it includes robust account management features, allowing users to edit and delete their posts as needed.',
				technologiesDescription:
					'Built with React, Next.js, HTML, CSS, Firebase, and deployed on Vercel.',
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
