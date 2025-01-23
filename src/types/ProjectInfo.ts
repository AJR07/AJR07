export interface ProjectInfo {
	// metadata
	title: string;
	description: string;

	// links
	primaryLink: string;
	links: {
		name: string,
		link: string
	}[];

	// dates
	createdAt: string;
	lastUpdated: string;

	// others
	img: string;
}