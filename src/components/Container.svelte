<script lang="ts">
	import type { ProjectInfo } from "src/types/ProjectInfo";
	import Project from "./Project.svelte";
	import type { Colour, ColourInfo } from "src/types/Colours";

	export let projects: ProjectInfo[], colourChoice: keyof typeof Colour;

	const COLOURS: {
		[key in Colour]: ColourInfo;
	} = {
		blue: {
			colour: '#85A6D7',
			background: 'linear-gradient(-63.502deg, #000000 0%, #143356 100%)',
			overlay: 'rgba(33, 122, 255, 0.1)'
		},
		// TODO: UPDATE
		green: {
			colour: '#85D7A9',
			background: 'linear-gradient(-63.502deg, #000000 0%, #143356 100%)',
			overlay: 'rgba(33, 122, 255, 0.1)'
		},
		red: {
			colour: '#D78585',
			background: 'linear-gradient(-63.502deg, #000000 0%, #143356 100%)',
			overlay: 'rgba(33, 122, 255, 0.1)'
		},
		yellow: {
			colour: '#D7D785',
			background: 'linear-gradient(-63.502deg, #000000 0%, #143356 100%)',
			overlay: 'rgba(33, 122, 255, 0.1)'
		},
		purple: {
			colour: '#D785D7',
			background: 'linear-gradient(-63.502deg, #000000 0%, #143356 100%)',
			overlay: 'rgba(33, 122, 255, 0.1)'
		}
	};
	const chosenColour = COLOURS[colourChoice];
</script>

<div class="grid grid-rows-2 mx-5">
	{#each projects as projectInfo}
		<Project {projectInfo} {chosenColour} />
	{/each}
</div>