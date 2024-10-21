<script>
	import ExpandableSelector from '../../components/ExpandableSelector.svelte';
	export let projectContainer;
</script>

<div class="fixed z-20 ml-4 mr-4 pt-4 flex w-20 h-full flex-col">
	{#each projectContainer as container}
		<ExpandableSelector text="{container.title}" />
		{#if projectContainer.at(-1) !== container}
			<div class="w-0 ml-4 border border-dashed border-gray-400 flex-1 max-h-20"></div>
		{/if}
	{/each}
</div>
