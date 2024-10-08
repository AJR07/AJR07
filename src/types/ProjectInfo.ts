import type { Colour } from "./Colours";

export interface ProjectInfo {
	title: string;
	colour: Colour;
	description: string;
	createdAt: Date;
	lastUpdated: Date;
}