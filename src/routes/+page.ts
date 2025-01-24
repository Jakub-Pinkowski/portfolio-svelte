import type { PageLoad } from './$types';

import { websites } from '$lib/data/websites';
import { mainProjects } from '$lib/data/mainProjects';
import { studiesProjects } from '$lib/data/studiesProjects';
import { simpleProjects } from '$lib/data/simpleProjects';
import { icons } from '$lib/data/icons';

export const load = (async () => {
	return {
		websites,
		mainProjects,
		studiesProjects,
		simpleProjects,
		icons
	};
}) satisfies PageLoad;
