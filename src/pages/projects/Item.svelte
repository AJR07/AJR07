<script lang="ts">
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import type { ColourInfo } from 'src/types/Colours';
	import type { ProjectInfo } from 'src/types/ProjectInfo';

	export let projectInfo: ProjectInfo;
	export let chosenColour: ColourInfo;

	let hovering = false;
</script>

<div
	class="relative flex items-center justify-center h-40 flex-1 rounded-lg shadow-xl transition duration-500 hover:scale-102"
	style="{`background: ${chosenColour.overlay}; color: ${chosenColour.colour}`}"
	role="region"
	on:mouseenter="{() => (hovering = true)}"
	on:mouseleave="{() => (hovering = false)}"
>
	<div id="default-container" class="{`w-full h-full md:ml-5 flex flex-col md:flex-row items-center transition duration-500 ${hovering ? 'opacity-0' : 'opacity-100'}`}">
		<a
			href="{projectInfo.primaryLink}"
			class="py-2 px-3 md:py-0 md:w-5/12 text-lg md:text-3xl text-center font-bold hover:underline"
		>
			{projectInfo.title}
		</a>
		<span class="flex-1"/>
		<img class="w-full h-28 md:w-6/12 md:h-full object-cover rounded-b-lg md:rounded-r-lg" src={projectInfo.img} alt={`${projectInfo.title}-image`} />
	</div>

	<div id="overlay-container" class="{`p-4 absolute flex flex-col w-full h-full transition duration-500 ${hovering ? 'opacity-100' : 'opacity-0'}`}">
		<!-- UPDATE TAILWIND.CONFIG.TS FOR DYNAMICALLY GENERATED STYLES -->
		<div class="flex flex-row gap-2">
			<span
				class="inline-flex items-center rounded bg-{chosenColour.overall}-200 px-2 py-1 text-xs font-medium text-{chosenColour.overall}-900"
			>
				Created: {projectInfo.createdAt}
			</span>
			<span
				class="inline-flex items-center rounded bg-{chosenColour.overall}-100 px-2 py-1 text-xs font-medium text-{chosenColour.overall}-800"
			>
				Last Updated: {projectInfo.lastUpdated}
			</span>
		</div>

		<p class="text-white text-xs sm:text-sm md:text-md">{projectInfo.description}</p>

		<span class="flex-1"/>

		<div id="links" class="flex flex-row gap-3">
			{#each projectInfo.links as link}
				<button
					class="flex items-center gap-2 rounded px-1 md:px-4 py-1 md:py-2 font-bold text-white hover:scale-102"
					style="{`background: ${chosenColour.overlay}`}"
					on:click="{() => window.open(link.link, '_blank')}"
				>
					<SquareArrowOutUpRight />
					<span class="text-white text-xs md:text-base">{link.name}</span>
				</button>
			{/each}
		</div>
	</div>
</div>
