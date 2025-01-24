import mobile from '$lib/assets/images/studies_projects/mobile.webp';
import internet from '$lib/assets/images/studies_projects/internet.webp';
import desktop from '$lib/assets/images/studies_projects/desktop.webp';

import type { Project } from '$lib/types';

export const studiesProjects: Project[] = [
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
];
