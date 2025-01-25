// Websites
import auto_repair from '$lib/assets/images/websites/auto-repair.jpg';
import insurance_agency from '$lib/assets/images/websites/insurance-agency.jpg';

import type { Website } from '$lib/types';

export const websites: Website[] = [
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
];
