<script>
	import ExpandableSelector from "../../components/ExpandableSelector.svelte";
	export let projectContainer;
</script>
<div class="fixed w-40 mx-4 z-20">
	<div class="flex flex-col">
		{#each projectContainer as container}
			<ExpandableSelector text={container.title} />
		{/each}
	</div>
</div>