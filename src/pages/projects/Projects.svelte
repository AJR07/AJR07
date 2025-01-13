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

	const scrollToEnd = () => {
		const container = document.getElementById('container');
		container?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
	};
</script>

<div id="container" class="mb-16">
	<SideNavbar projectContainer="{processedProjectContainers}" />
	<div id="main" class="flex flex-col">
 		<div id="Home" class="flex flex-col h-min min-h-svh items-center">
			<img
				id="profile-picture"
				src="AJR.png"
				alt="AJR-profile"
				class="-mb-[7.5%] -mt-[5%] w-3/4"
			/>
			<h1
				id="header"
				class="bg-gradient-to-r from-[#58ff5d] to-[#ffd000] !bg-clip-text text-[5vw] font-bold text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
			>
				PROJECTS :D
			</h1>

			<span class="flex flex-1"/>

			<button class="absolute bottom-20 flex flex-col items-center gap-2 animate-pulse hover:scale-105 hover:cursor-pointer" on:click={scrollToEnd}>
				<img
					src="/icons/TripleDownArrow.svg"
					alt="triple-down-arrow"
					class="w-10"
					id="down-arrow"
				/>
				<p class="font-bold">
					Scroll For More
				</p>
			</button>
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
