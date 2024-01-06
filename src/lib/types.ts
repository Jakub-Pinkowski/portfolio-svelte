export type Website = {
	id: number;
	nameKey: string;
	img: string;
	descriptionKey: string;
	src: string;
};

export type Project = {
	id: number;
	nameKey: string;
	src: string;
	img: string;
	descriptionKey: string;
	technologiesDescriptionKey: string;
	technologies: string[];
	github: string;
};

export type Icon = {
	id: number;
	name: string;
	src: string;
};
