<script lang="ts">
	import type { ProjectInfo } from 'src/types/ProjectInfo';
	import Project from './Project.svelte';
	import type { Colour, ColourInfo } from 'src/types/Colours';

	export let projects: ProjectInfo[];
	export let colourChoice: keyof typeof Colour;
	export let containerTitle: string;

	const COLOURS: {
		[key in Colour]: ColourInfo;
	} = {
		blue: {
			colour: '#85A6D7',
			background: 'linear-gradient(-63.502deg, #000000 0%, #143356 100%)',
			overlay: 'rgba(33, 122, 255, 0.1)'
		},
		green: {
			colour: '#85D7A6',
			background: 'linear-gradient(-60.974deg, #000000 0%, #1A5A0F 100%)',
			overlay: 'rgba(33, 122, 255, 0.1)'
		},
		red: {
			colour: '#D78585',
			background: 'linear-gradient(-60.974deg, #000000 0%, #5A0F0F 100%);',
			overlay: 'rgba(33, 122, 255, 0.1)'
		},
		yellow: {
			colour: '#D7D785',
			background: 'linear-gradient(-60.974deg, #000000 0%, #585A0F 100%);',
			overlay: 'rgba(33, 122, 255, 0.1)'
		},
		purple: {
			colour: '#D785D7',
			background: 'linear-gradient(-60.974deg, #000000 0%, #4B0F5A 100%);',
			overlay: 'rgba(33, 122, 255, 0.1)'
		}
	};
	const chosenColour = COLOURS[colourChoice];
</script>

<div class="p-6 h-min" style="{`background: ${chosenColour.background}`}">
	<h2
		class="text-5xl font-bold mb-6"
		style="{`color: ${chosenColour.colour}`}"
	>
		{containerTitle}
	</h2>
	<div class="grid grid-cols-2 gap-6">
		{#each projects as projectInfo}
			<Project {projectInfo} {chosenColour} />
		{/each}
	</div>
</div>
