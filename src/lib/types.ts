export type Website = {
	id: number;
	name: string;
	img: string;
	description: string;
	src: string;
};

export type Project = {
	id: number;
	name: string;
	src: string;
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
