export type Project = {
	name: string;
	src?: string;
	label?: string;
	labelColor?: string;
	img: string;
	summary?: string;
	description: string;
	features?: string[];
	technologiesDescription?: string;
	technologies: string[];
	github: string;
};

export type Icon = {
	name: string;
	src: string;
};
