import type { PageLoad } from './$types';

// Main projects
import e_commerce from '$lib/assets/images/main_projects/e-commerce.jpg';
import jules_art from '$lib/assets/images/main_projects/jules-art.jpg';
import crypto_bot from '$lib/assets/images/main_projects/crypto_bot.jpg';
import blogging_platform from '$lib/assets/images/main_projects/blogging-platform.jpg';
import links_page from '$lib/assets/images/main_projects/links-page.jpg';
import habit_tracker from '$lib/assets/images/main_projects/habit-tracker.jpg';

// Studies
import mobile from '$lib/assets/images/studies_projects/mobile.jpg';
import internet from '$lib/assets/images/studies_projects/internet.jpg';
import desktop from '$lib/assets/images/studies_projects/desktop.jpg';

// Simple projects
import meals from '$lib/assets/images/simple_projects/meals.jpg';
import weather from '$lib/assets/images/simple_projects/weather.jpg';
import travel_blog from '$lib/assets/images/simple_projects/travel-blog.jpg';
import todo from '$lib/assets/images/simple_projects/todo.jpg';
import coach from '$lib/assets/images/simple_projects/coach.jpg';
import investment_calculator from '$lib/assets/images/simple_projects/investment-calculator.jpg';

// Websites
import auto_repair from '$lib/assets/images/websites/auto-repair.jpg';
import insurance_agency from '$lib/assets/images/websites/insurance-agency.jpg';

// Core Languages
import tsIcon from '$lib/assets/icons/ts.png';
import jsIcon from '$lib/assets/icons/js.png';
import htmlIcon from '$lib/assets/icons/html.png';
import cssIcon from '$lib/assets/icons/css.png';

// Frontend Frameworks and Libraries
import reactIcon from '$lib/assets/icons/react.png';
import nextIcon from '$lib/assets/icons/next.png';
import vueIcon from '$lib/assets/icons/vue.png';
import svelteIcon from '$lib/assets/icons/svelte.png';
import sveltekitIcon from '$lib/assets/icons/sveltekit.png';

// Styling Frameworks and Libraries
import tailwindIcon from '$lib/assets/icons/tailwind.png';
import sassIcon from '$lib/assets/icons/sass.png';

// Backend Frameworks and Databases
import dotNetIcon from '$lib/assets/icons/dot-net.png';
import blazorIcon from '$lib/assets/icons/blazor.png';
import prismaIcon from '$lib/assets/icons/prisma.png';
import drizzleIcon from '$lib/assets/icons/drizzle.png';
import postgresqlIcon from '$lib/assets/icons/postgresql.png';
import sqliteIcon from '$lib/assets/icons/sql.png';

// Deployment and Hosting
import vercelIcon from '$lib/assets/icons/vercel.png';
import firebaseIcon from '$lib/assets/icons/firebase.png';

// Supporting Tools
import gitIcon from '$lib/assets/icons/git.png';
import githubIcon from '$lib/assets/icons/github.png';
import pythonIcon from '$lib/assets/icons/python.png';
import reactNativeIcon from '$lib/assets/icons/react-native.png';
import cSharpIcon from '$lib/assets/icons/csharp.png';

import type { Website, Project, Icon } from '$lib/types';

export const load = (async () => {
	return {
		websites: [
			{
				name: 'Insurance Agency',
				img: insurance_agency,
				description:
					'Insurance agency website designed to showcase the services offered by the company.',
				src: 'https://biznes1.xce.pl/'
			},
			{
				name: 'Auto Repair Shop',
				img: auto_repair,
				description:
					'Auto repair shop website designed to showcase the services offered by the company.',
				src: 'https://biznes2.xce.pl/'
			}
		] as Website[],
		mainProjects: [
			{
				name: 'E-commerce website',
				src: 'https://commerce-website-psi.vercel.app',
				label: 'Flagship Project',
				labelColor: '#e9c46a',
				img: e_commerce,
				summary:
					'Fullstack e-commerce website for product browsing, filtering, cart management and user authentication.',
				description:
					'A fullstack e-commerce website with features like product filtering, sorting, adding to cart and wishlist, viewing product details, site-wide search, and user authentication with email and OAuth (GitHub, Google) to track user data and orders.',
				features: [
					'View, filter and sort all products',
					'Add products to cart and wishlist',
					"View all products' details on dedicated product page",
					'Site-wide search functionality',
					'User authentication with email and OAuth (GitHub, Google)'
				],
				technologies: [
					'TypeScript',
					'HTML',
					'CSS',
					'SvelteKit',
					'Tailwind',
					'PostgreSQL',
					'Drizzle',
					'Vercel'
				],
				github: 'https://github.com/Jakub-Pinkowski/commerce-website'
			},
			{
				name: 'Jules-Art',
				src: 'https://jules-art.com',
				label: 'Freelance Project',
				labelColor: '#8ecae6',
				img: jules_art,
				summary:
					'Portfolio site for an artist, featuring a responsive design with media such as images, videos, and audio.',
				description:
					"Artist's portfolio website designed to showcase her creative work and provide a means for visitors to get in touch with her. This project was built for a client to meet her specific requirements and aesthetic preferences. The website features a clean and modern design, intuitive navigation, and responsive layout to provide an optimal viewing experience across all devices.",
				features: [
					'Custom-built for a client',
					'Showcases artwork with images, videos, and audio.',
					'Intuitive navigation',
					'Responsive design',
					'Easy contact options for visitors'
				],

				technologies: ['TypeScript', 'HTML', 'CSS', 'Vue.js', 'Firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Jules-Art'
			},
			{
				name: 'Crypto Bot',
				img: crypto_bot,
				summary:
					'Python-based cryptocurrency trading bot with fully automated strategies and risk management.',
				description:
					'Personalized cryptocurrency trading bot that automates trading using predefined strategies. The bot analyzes market trends and price data in real time, executes trades on exchanges, and incorporates risk management techniques to optimize performance. No user interface, terminal control.',
				features: [
					'Automated trading logic',
					'Fetches real-time market data and executes trades',
					'Adjusts key parameters to adapt to the market',
					'Analyzes real-time price data to make trading decisions.',
					'Tracks balances and evaluates portfolio performance.',
					'Scores and enhances different strategies',
					'Unit tests for all modules'
				],

				technologies: ['Python'],
				github: 'https://github.com/Jakub-Pinkowski/crypto-bot'
			},
			{
				name: 'Blogging Platform',
				src: 'https://blogging-platform-steel.vercel.app',
				img: blogging_platform,
				summary: 'Platform to create, edit, publish, and share engaging blog posts easily.',
				description:
					'A blogging platform that enables users to create accounts, write and manage blog posts, and engage with others by liking their posts. It provides an easy-to-use interface with responsive design for optimal user experience.',
				features: [
					'User authentication to create and manage accounts.',
					'Create, edit, and delete blog posts easily.',
					'Support for liking posts to engage with other users.',
					'Responsive design for seamless use across devices.',
					'Built-in database integration for secure and scalable content management.'
				],
				technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Next.js', 'Firebase', 'Vercel'],
				github: 'https://github.com/Jakub-Pinkowski/Blogging-Platform'
			},
			{
				name: 'Links Page',
				src: 'https://links-page-rosy.vercel.app',
				img: links_page,
				summary: 'Customizable page for listing, organizing, and sharing useful links with others.',
				description:
					'A social media links page inspired by Linktree. Users can register to create personalized link pages, add and organize their links, and share them via a public URL.',
				features: [
					'User registration and login to manage personalized link pages.',
					'Easily add, customize, and organize social media links.',
					'Shareable public URL for promoting your link page.',
					'Responsive user interface to adapt to all screen sizes.',
					'Easy account management for editing or updating links on the go.'
				],
				technologies: [
					'TypeScript',
					'HTML',
					'CSS',
					'Svelte',
					'SvelteKit',
					'Tailwind',
					'Firebase',
					'Vercel'
				],
				github: 'https://github.com/Jakub-Pinkowski/links-page'
			},
			{
				name: 'Habit Tracker',
				src: 'http://pinkowskijakub.eu.pythonanywhere.com',
				img: habit_tracker,
				summary: 'Tool to monitor, manage, and build consistency in achieving personal habits.',
				description:
					'Habit Tracker is a simple and intuitive app for tracking daily habits and routines. Users can create, edit, and delete habit entries while monitoring their progress over time. The app includes a clean and responsive interface.',
				features: [
					'Add, edit, and delete daily habits with ease.',
					'Track progress to stay consistent with routines.',
					'Simple and clean interface for an organized experience.',
					'Responsive design for tracking habits on all devices.',
					'Data storage and retrieval using a database for easy management.'
				],
				technologies: ['JavaScript', 'HTML', 'CSS', 'Python', 'SQLite'],
				github: 'https://github.com/Jakub-Pinkowski/cs50_final_project'
			}
		] as Project[],
		studiesProjects: [
			{
				name: 'Mobile Business Application',
				img: mobile,
				description:
					'A professional mobile CRUD application featuring a polished design and well-implemented business logic',
				technologies: ['TypeScript', 'React Native', '.NET', 'C#', 'SQLite'],
				github: 'https://github.com/Jakub-Pinkowski/mobile-business-application'
			},
			{
				name: 'Internet Business Application',
				img: internet,
				description:
					'A professional internet CRUD application featuring a polished design and well-implemented business logic',
				technologies: ['Blazor', '.NET', 'C#', 'SQLite'],
				github: 'https://github.com/Jakub-Pinkowski/internet-business-application'
			},
			{
				name: 'Desktop Business Application',
				img: desktop,
				description:
					'A professional desktop CRUD application featuring a polished design and well-implemented business logic',
				technologies: ['.NET', 'C#', 'SQLite'],
				github: 'https://github.com/Jakub-Pinkowski/desktop-business-application'
			}
		] as Project[],
		simpleProjects: [
			{
				name: 'Meals App',
				src: 'https://react-counter-64e25.web.app',
				img: meals,
				description: 'Meals app that allows you to add meals to your cart and order them.',
				technologiesDescription: 'Built with JavaScript, HTML, CSS, React and Firebase.',
				technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Firebase'],
				github: 'https://github.com/Jakub-Pinkowski/react-meals'
			},
			{
				name: 'Weather App',
				src: 'https://weather-app-11d00.web.app',
				img: weather,
				description: 'Weather app that allows you to check the weather in your city',
				technologiesDescription: 'Built with TypeScript, HTML, CSS, Vue.js and Firebase.',
				technologies: ['TypeScript', 'HTML', 'CSS', 'Vue.js', 'Firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Weather-App'
			},
			{
				name: 'Travel Blog',
				src: 'https://travel-blog-9cc00.web.app',
				img: travel_blog,
				description: 'Travel blog website. The admin can add posts and images.',
				technologiesDescription: 'Built with TypeScript, HTML, CSS, Vue.js and Firebase.',
				technologies: ['TypeScript', 'HTML', 'CSS', 'Vue.js', 'Firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Travel-Blog'
			},
			{
				name: 'TODO App',
				src: 'https://todo-app-5ce36.web.app',
				img: todo,
				description: 'Simple TODO app that allows you to add, edit and delete your tasks.',
				technologiesDescription: 'Built with TypeScript, HTML, CSS, Vue.js and Firebase.',
				technologies: ['TypeScript', 'HTML', 'CSS', 'Vue.js', 'Firebase'],
				github: 'https://github.com/Jakub-Pinkowski/Todo-App'
			},
			{
				name: 'Coaching Platform',
				src: 'https://vue-udemy-section16.web.app',
				img: coach,
				description: 'Find a coach website that allows you to and register as a coach or find one.',
				technologiesDescription: 'Built with TypeScript, HTML, CSS, Vue.js and Firebase.',
				technologies: ['TypeScript', 'HTML', 'CSS', 'Vue.js', 'Firebase'],
				github: 'https://github.com/Jakub-Pinkowski/vue-udemy'
			},
			{
				name: 'Investment Calculator',
				src: 'https://investment-calculator-28479.web.app',
				img: investment_calculator,
				description: 'Investment calculator that allows you to calculate your investment income.',
				technologiesDescription: 'Built with JavaScript, HTML, CSS, React and Firebase.',
				technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Firebase'],
				github: 'https://github.com/Jakub-Pinkowski/investment-calculator'
			}
		] as Project[],
		icons: [
			// Core Languages
			{ name: 'TypeScript', src: tsIcon },
			{ name: 'JavaScript', src: jsIcon },
			{ name: 'HTML', src: htmlIcon },
			{ name: 'CSS', src: cssIcon },

			// Frontend Frameworks and Libraries
			{ name: 'React', src: reactIcon },
			{ name: 'Next.js', src: nextIcon },
			{ name: 'Vue.js', src: vueIcon },
			{ name: 'Svelte', src: svelteIcon },
			{ name: 'SvelteKit', src: sveltekitIcon },

			// Styling Frameworks and Libraries
			{ name: 'Tailwind', src: tailwindIcon },
			{ name: 'SASS', src: sassIcon },

			// Backend Frameworks and Databases
			{ name: '.NET', src: dotNetIcon },
			{ name: 'Blazor', src: blazorIcon },
			{ name: 'Prisma', src: prismaIcon },
			{ name: 'Drizzle', src: drizzleIcon },
			{ name: 'PostgreSQL', src: postgresqlIcon },
			{ name: 'SQLite', src: sqliteIcon },

			// Deployment and Hosting
			{ name: 'Vercel', src: vercelIcon },
			{ name: 'Firebase', src: firebaseIcon },

			// Supporting Tools
			{ name: 'Git', src: gitIcon },
			{ name: 'GitHub', src: githubIcon },
			{ name: 'Python', src: pythonIcon },
			{ name: 'React Native', src: reactNativeIcon },
			{ name: 'C#', src: cSharpIcon }
		] as Icon[]
	};
}) satisfies PageLoad;
