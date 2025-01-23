<script lang="ts">
	import Container from './Container.svelte';
	import SideNavbar from './SideNavbar.svelte';
	import type { ContainerInfo } from 'src/types/ContainerInfo';

	export let projectContainers: ContainerInfo[];
</script>

<div id="projects">
	<SideNavbar projectContainer="{projectContainers}" />
	<div id="main" class="flex flex-col">
		{#each projectContainers as projectContainer}
			<Container
				containerTitle="{projectContainer.title}"
				colourChoice="{projectContainer.colourChoice}"
				projects="{projectContainer.projects}"
			/>
		{/each}
	</div>
</div>
