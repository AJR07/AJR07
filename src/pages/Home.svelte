<script lang="ts">
	import projectContainers from '../data/projects.json';
	import type { Colour } from 'src/types/Colours';
	import Projects from './projects/Projects.svelte';
	import { ChevronsDown } from 'lucide-svelte';
	import GlowBlob from '../components/GlowBlob.svelte';
	import SectionLabel from '../components/SectionLabel.svelte';
	import AboutMe from './aboutme/AboutMe.svelte';

	// Project Containers
	const processedProjectContainers = projectContainers.map((container) => ({
		...container,
		colourChoice: container.colourChoice as Colour
	}));

	// scroll to end of page when button is clicked
	const scrollToEnd = () => {
		const container = document.getElementsByTagName('main')[0];
		container?.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'end'
		});
	};
</script>

<main>
	<div id="greeter" class="relative overflow-hidden flex h-min min-h-svh flex-col items-center">
		<GlowBlob color="#58c2ff" size="40vw" top="-10vw" left="-10vw" />
		<GlowBlob color="#4cdb58" size="40vw" bottom="-10vw" right="-10vw" />

		<img
			id="profile-picture"
			src="AJR.png"
			alt="AJR-profile"
			class="-mb-[7.5%] -mt-[5%] w-3/4"
		/>
		<h1
			id="header"
			class="bg-gradient-to-r from-[#58c2ff] to-[#4cdb58] !bg-clip-text text-[5vw] font-bold text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
		>
			👋 Hallo, I'm AJR!
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

	<div id="about-me">
		<SectionLabel label="About Me" colour="#4cdb58" />
		<AboutMe />
	</div>

	<div id="projects">
		<SectionLabel label="Projects" colour="#58c2ff" />
		<Projects projectContainers="{processedProjectContainers}" />
	</div>
</main>
