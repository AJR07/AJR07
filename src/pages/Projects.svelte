<script lang="ts">
	import Container from './generator/Container.svelte';
	import projectContainers from '../data/projects.json';
	import { Colour } from '../types/Colours';
	import SideNavbar from './generator/SideNavbar.svelte';
	import { ChevronsDown } from 'lucide-svelte';
	import GlowBlob from '../components/GlowBlob.svelte';
	import GlowBlobContainer from '../components/GlowBlobContainer.svelte';

	// Generate glow blob positions
	const randomPositions = Array.from({ length: 4 }, () => ({
		top: `${Math.floor(Math.random() * window.innerHeight) - window.innerHeight / 2}px`,
		left: `${Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2}px`,
		color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
	}));

	// Project Containers
	const processedProjectContainers = projectContainers.map((container) => ({
		...container,
		colourChoice: container.colourChoice as Colour
	}));

	const scrollToEnd = () => {
		const container = document.getElementById('container');
		container?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'end'
		});
	};
</script>

<div id="container" class="pb-32">
	<GlowBlobContainer>
		<GlowBlob
			color="#58ff5d"
			size="{'30vw'}"
			top="{'-10px'}"
			left="{'-10px'}"
		/>
		<GlowBlob
			color="#ffd000"
			size="{'30vw'}"
			bottom="{'-10px'}"
			right="{'-10px'}"
		/>

		{#each randomPositions as { top, left, color }, _}
			<GlowBlob {color} size="{'30vw'}" {top} {left} />
		{/each}
	</GlowBlobContainer>

	<SideNavbar projectContainer="{processedProjectContainers}" />
	<div id="main" class="flex flex-col">
		<div id="Home" class="flex h-min min-h-svh flex-col items-center">
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

			<span class="flex flex-1"></span>

			<button
				class="absolute bottom-20 flex animate-pulse flex-col items-center hover:scale-105 hover:cursor-pointer"
				on:click="{scrollToEnd}"
			>
				<ChevronsDown class="h-auto w-16" />
				<p class="font-bold">Scroll For More</p>
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
