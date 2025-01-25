// Frontend Languages
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

import type { Icon } from '$lib/types';

export const icons: Icon[] = [
	// Frontend Languages
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
];
