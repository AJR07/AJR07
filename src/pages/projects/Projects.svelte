<script lang="ts">
	import Container from './Container.svelte';
	import projectContainers from '../../data/projects.json';
	import { Colour } from '../../types/Colours';
	import SideNavbar from './SideNavbar.svelte';

	const processedProjectContainers = projectContainers.map((container) => ({
		...container,
		colourChoice: container.colourChoice as Colour,
		projects: container.projects.map((project) => ({
			...project,
			createdAt: new Date(project.createdAt),
			lastUpdated: new Date(project.lastUpdated)
		}))
	}));
</script>

<div id="container" class="mb-16">
	<SideNavbar projectContainer="{processedProjectContainers}" />
	<div id="main" class="flex flex-col" style="min-height: calc(100vh - 4rem);">
		<div id="Home" class="flex flex-col" style="height: calc(100vh - 4rem);">
			<img
				id="profile-picture"
				src="AJR.png"
				alt="AJR-profile"
				class="-mb-[7.5%] -mt-[5%] w-3/4 self-center"
			/>
			<h1
				id="header"
				class="bg-gradient-to-r from-[#58ff5d] to-[#ffd000] !bg-clip-text text-center text-[5vw] font-bold text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
			>
				PROJECTS :D
			</h1>

			<span class="flex flex-1"/>

			<div class="flex flex-col items-center gap-2 mb-5">
				<img
					src="/icons/TripleDownArrow.svg"
					alt="triple-down-arrow"
					class="w-10 hover:scale-105"
					id="down-arrow"
				/>
				<p>
					scroll for more
				</p>
			</div>
		</div>
		{#each processedProjectContainers as processedProjectContainer}
			<Container
				containerTitle="{processedProjectContainer.title}"
				colourChoice="{processedProjectContainer.colourChoice}"
				projects="{processedProjectContainer.projects}"
			/>
		{/each}
	</div>
</div>
