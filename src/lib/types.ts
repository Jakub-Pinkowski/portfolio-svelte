export type Website = {
	name: string;
	img: string;
	description: string;
	src: string;
};

export type Project = {
	name: string;
	src?: string;
	label?: string;
	labelColor?: string;
	img: string;
	summary?: string;
	description: string;
    subDescription?: string;
	features?: string[];
	technologiesDescription?: string;
	technologies: string[];
	github: string;
};

export type Icon = {
	name: string;
	src: string;
};
