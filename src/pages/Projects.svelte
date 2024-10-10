<script lang="ts">
	import Container from '../components/Container.svelte';
	import projectContainers from '../data/projects.json';
	import { Colour } from '../types/Colours';

	const processedProjectContainers = projectContainers.map(container => ({
        ...container,
        colourChoice: container.colourChoice as Colour,
		projects: container.projects.map(project => ({
			...project,
			createdAt: new Date(project.createdAt),
			lastUpdated: new Date(project.lastUpdated),
		}))
    }));
</script>

<div id="container" class="mb-16">
	<div id="main" class="flex min-h-svh flex-col">
		<h1
			id="header"
			class="mt-16 bg-gradient-to-r from-[#ff2020] to-[#fff700] !bg-clip-text text-center text-[5vw] font-bold text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
		>
			PROJECTS
		</h1>
		<div>
			{#each processedProjectContainers as processedProjectContainer}
				<Container containerTitle={processedProjectContainer.title} colourChoice={processedProjectContainer.colourChoice} projects={processedProjectContainer.projects} />
			{/each}
		</div>
	</div>
</div>
