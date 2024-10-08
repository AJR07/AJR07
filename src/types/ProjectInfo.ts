import type { Colour } from "./Colours";

export interface ProjectInfo {
	// metadata
	title: string;
	version: string;
	description: string;

	// links
	primaryLink: string;
	links: string[];

	// dates
	createdAt: Date;
	lastUpdated: Date;
}