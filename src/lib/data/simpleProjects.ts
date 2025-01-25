import meals from '$lib/assets/images/simple_projects/meals.webp';
import weather from '$lib/assets/images/simple_projects/weather.webp';
import travel_blog from '$lib/assets/images/simple_projects/travel-blog.webp';
import todo from '$lib/assets/images/simple_projects/todo.webp';
import coach from '$lib/assets/images/simple_projects/coach.webp';
import investment_calculator from '$lib/assets/images/simple_projects/investment-calculator.webp';

import type { Project } from '$lib/types';

export const simpleProjects: Project[] = [
	{
		name: 'Investment Calculator',
		src: 'https://investment-calculator-28479.web.app',
		img: investment_calculator,
		description: 'Investment calculator that allows you to calculate your investment income.',
		technologiesDescription: 'Built with JavaScript, HTML, CSS, React and Firebase.',
		technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Firebase'],
		github: 'https://github.com/Jakub-Pinkowski/investment-calculator'
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
		name: 'Meals App',
		src: 'https://react-counter-64e25.web.app',
		img: meals,
		description: 'Meals app that allows you to add meals to your cart and order them.',
		technologiesDescription: 'Built with JavaScript, HTML, CSS, React and Firebase.',
		technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Firebase'],
		github: 'https://github.com/Jakub-Pinkowski/react-meals'
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
	}
];
