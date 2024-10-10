export interface ProjectInfo {
	// metadata
	title: string;
	version: string;
	description: string;

	// links
	primaryLink: string;
	links: {
		name: string,
		link: string
	}[];

	// dates
	createdAt: Date;
	lastUpdated: Date;
}