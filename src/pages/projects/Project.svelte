<script lang="ts">
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import { config } from 'process';
	import type { ColourInfo } from 'src/types/Colours';
	import type { ProjectInfo } from 'src/types/ProjectInfo';

	export let projectInfo: ProjectInfo;
	export let chosenColour: ColourInfo;
</script>

<div
	class="flex h-auto w-full transform flex-col gap-2 rounded-lg p-6 shadow-md transition duration-500 hover:scale-102"
	style="{`background: ${chosenColour.overlay}; color: ${chosenColour.colour}`}"
>
	<h3 class="text-3xl font-bold hover:cursor-pointer hover:underline">
		<a href="{projectInfo.primaryLink}">
			{projectInfo.title} v{projectInfo.version}
		</a>
	</h3>

	<!-- UPDATE TAILWIND.CONFIG.TS FOR DYNAMICALLY GENERATED STYLES -->
	<div class="flex flex-row gap-2">
		<span
			class="inline-flex items-center rounded bg-{chosenColour.overall}-200 px-2 py-1 text-xs font-medium text-{chosenColour.overall}-900"
		>
			Created: {projectInfo.createdAt.toLocaleDateString()}
		</span>
		<span
			class="inline-flex items-center rounded bg-{chosenColour.overall}-100 px-2 py-1 text-xs font-medium text-{chosenColour.overall}-800"
		>
			Last Updated: {projectInfo.lastUpdated.toLocaleDateString()}
		</span>
	</div>
	<p>{projectInfo.description}</p>
	<div id="links" class="flex flex-row gap-3">
		{#each projectInfo.links as link}
			<button
				class="flex items-center gap-2 rounded px-4 py-2 font-bold text-white hover:scale-102"
				style="{`background: ${chosenColour.overlay}`}"
				on:click="{() => window.open(link.link, '_blank')}"
			>
				<SquareArrowOutUpRight />
				<span class="text-white">{link.name}</span>
			</button>
		{/each}
	</div>
</div>
