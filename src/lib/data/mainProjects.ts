import e_commerce from '$lib/assets/images/main_projects/e-commerce.webp';
import jules_art from '$lib/assets/images/main_projects/jules-art.webp';
import crypto_bot from '$lib/assets/images/main_projects/crypto_bot.webp';
import blogging_platform from '$lib/assets/images/main_projects/blogging-platform.webp';
import links_page from '$lib/assets/images/main_projects/links-page.webp';
import habit_tracker from '$lib/assets/images/main_projects/habit-tracker.webp';

import type { Project } from '$lib/types';

export const mainProjects: Project[] = [
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
];
