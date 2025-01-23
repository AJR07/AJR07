<script lang="ts">
	import type { ProjectInfo } from 'src/types/ProjectInfo';
	import Project from './Item.svelte';
	import type { Colour } from '../../types/Colours';
	import { COLOURS } from '$lib/colourdata';

	export let projects: ProjectInfo[];
	export let colourChoice: keyof typeof Colour;
	export let containerTitle: string;

	const chosenColour = COLOURS[colourChoice];
</script>

<div id={containerTitle} class="p-6 pl-28 h-min" style="{`background: ${chosenColour.background}`}">
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
