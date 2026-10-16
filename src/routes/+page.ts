import type { PageLoad } from './$types';

import { mainProjects } from '#lib/data/mainProjects.js';
import { studiesProjects } from '#lib/data/studiesProjects.js';
import { simpleProjects } from '#lib/data/simpleProjects.js';
import { icons } from '#lib/data/icons.js';

export const load = (async () => {
	return {
		mainProjects,
		studiesProjects,
		simpleProjects,
		icons
	};
}) satisfies PageLoad;
