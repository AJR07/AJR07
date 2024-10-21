<script lang="ts">
	import ExpandableSelector from '../../components/ExpandableSelector.svelte';
	import type { ContainerInfo } from '../../types/ContainerInfo';
	export let projectContainer: ContainerInfo[];

	let containerTitles = projectContainer.map((container) => container.title);
	containerTitles.unshift('Home');
</script>

<div class="fixed z-20 ml-4 mr-4 pt-4 flex w-20 h-full flex-col">
	{#each containerTitles as title}
		<ExpandableSelector text={title} />
		{#if containerTitles.at(-1) !== title}
			<div class="w-0 ml-4 border border-dashed border-gray-400 flex-1 max-h-20"></div>
		{/if}
	{/each}
</div>
