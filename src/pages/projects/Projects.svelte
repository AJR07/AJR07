<script lang="ts">
	import Container from './Container.svelte';
	import SideNavbar from './SideNavbar.svelte';
	import type { ContainerInfo } from 'src/types/ContainerInfo';

	export let projectContainers: ContainerInfo[];
</script>

<div id="projects">
	<SideNavbar projectContainer="{projectContainers}" />
	<div class="flex flex-col pb-16">
		{#each projectContainers as projectContainer}
			<Container
				containerTitle="{projectContainer.title}"
				colourChoice="{projectContainer.colourChoice}"
				projects="{projectContainer.projects}"
			/>
		{/each}
	</div>
</div>
