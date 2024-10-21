import type { Colour } from "./Colours";
import type { ProjectInfo } from "./ProjectInfo";

export type ContainerInfo = {
	colourChoice: Colour;
	projects: ProjectInfo[];
	title: string;
}