<script lang="ts">
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import type { ColourInfo } from 'src/types/Colours';
	import type { ProjectInfo } from 'src/types/ProjectInfo';

	export let projectInfo: ProjectInfo;
	export let chosenColour: ColourInfo;

	let hovering = false;
</script>

<div
	class="flex h-40 flex-1 p-6 rounded-lg shadow-md transition duration-500 hover:scale-102"
	style="{`background: ${chosenColour.overlay}; color: ${chosenColour.colour}`}"
	role="region"
	on:mouseenter="{() => (hovering = true)}"
	on:mouseleave="{() => (hovering = false)}"
>
	<div id="default-container" class="{`self-center transition duration-500 w-11/12 ${hovering ? 'opacity-0' : 'opacity-100'}`}">
		<a
			href="{projectInfo.primaryLink}"
			class="text-3xl font-bold hover:underline"
		>
			{projectInfo.title}
		</a>
	</div>

	<div class="{`absolute transition duration-500 ${hovering ? 'opacity-100' : 'opacity-0'}`}">
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
</div>
