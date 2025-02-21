<script lang="ts">
	import projectContainers from '../data/projects.json';
	import type { Colour } from 'src/types/Colours';
	import Projects from './projects/Projects.svelte';
	import { ChevronsDown } from 'lucide-svelte';
	import GlowBlob from '../components/GlowBlob.svelte';
	import SectionLabel from '../components/SectionLabel.svelte';
	import AboutMe from './aboutme/AboutMe.svelte';
	import TypeWriter from '../components/TypeWriter.svelte';
	import { onMount } from 'svelte';

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

	// animate fade-in
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('.fade-in').forEach((section) => {
			observer.observe(section);
		});
	});
</script>

<div>
	<div
		id="greeter"
		class="relative flex h-min min-h-svh flex-col items-center overflow-hidden"
	>

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
			<TypeWriter text="👋 Hallo, I'm AJR!" delay="{150}" />
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
	<div id="content" class="flex flex-col gap-10">
		<div id="about-me" class="fade-in">
			<SectionLabel label="About Me" colour="#4cdb58" />
			<AboutMe />
		</div>

		<div id="projects" class="fade-in">
			<SectionLabel label="Projects" colour="#58c2ff" />
			<Projects projectContainers="{processedProjectContainers}" />
		</div>
	</div>
</div>
