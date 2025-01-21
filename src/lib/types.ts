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
	description: string;
    subDescription?: string;
	technologiesDescription: string;
	technologies: string[];
	github: string;
};

export type Icon = {
	id: number;
	name: string;
	src: string;
};
