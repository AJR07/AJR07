<script lang="ts">
	import Container from './Container.svelte';
	import SideNavbar from './SideNavbar.svelte';
	import { ChevronsDown } from 'lucide-svelte';
	import GlowBlob from '../../components/GlowBlob.svelte';
	import GlowBlobContainer from '../../components/GlowBlobContainer.svelte';
	import type { ContainerInfo } from 'src/types/ContainerInfo';

	export let projectContainers: ContainerInfo[];

	// Generate glow blob positions
	const randomPositions = Array.from({ length: 4 }, () => ({
		top: `${Math.floor(Math.random() * window.innerHeight) - window.innerHeight / 2}px`,
		left: `${Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2}px`,
		color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
	}));

	// scroll to end of page when button is clicked
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

	<SideNavbar projectContainer="{projectContainers}" />
	<div id="main" class="flex flex-col">
		<div id="Home" class="flex h-min min-h-svh flex-col items-center">
			<slot></slot>

			<span class="flex flex-1"></span>

			<button
				class="absolute bottom-20 flex animate-pulse flex-col items-center hover:scale-105 hover:cursor-pointer"
				on:click="{scrollToEnd}"
			>
				<ChevronsDown class="h-auto w-16" />
				<p class="font-bold">Scroll For More</p>
			</button>
		</div>
		{#each projectContainers as projectContainer}
			<Container
				containerTitle="{projectContainer.title}"
				colourChoice="{projectContainer.colourChoice}"
				projects="{projectContainer.projects}"
			/>
		{/each}
	</div>
</div>
