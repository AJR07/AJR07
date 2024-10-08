<script lang="ts">
	import type { Colour, ColourInfo } from 'src/types/Colours';
	import type { ProjectInfo } from 'src/types/ProjectInfo';

	export let projectInfo: ProjectInfo;
	export let chosenColour: ColourInfo;
</script>

<div
	class="flex h-auto w-2/5 flex-col gap-2 rounded p-6"
	style="{`background: ${chosenColour.background}; color: ${chosenColour.colour}`}"
>
	<h3 class="text-4xl font-bold hover:underline hover:cursor-pointer">
		<a href="{projectInfo.primaryLink}">{projectInfo.title} v{projectInfo.version}</a>
	</h3>
	<div class="flex flex-row gap-2">
		<span
			class="inline-flex items-center rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-800"
		>
			Created: {projectInfo.createdAt.toLocaleDateString()}
		</span>
		<span
			class="inline-flex items-center rounded bg-orange-50 px-2 py-1 text-xs font-medium text-orange-800"
		>
			Last Updated: {projectInfo.lastUpdated.toLocaleDateString()}
		</span>
	</div>
	<p>{projectInfo.description}</p>
</div>
