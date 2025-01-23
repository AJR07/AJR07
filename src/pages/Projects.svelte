<script lang="ts">
	import Generator from './generator/Generator.svelte';
	import projectContainers from '../data/projects.json';
	import type { Colour } from 'src/types/Colours';

	// Project Containers
	const processedProjectContainers = projectContainers.map((container) => ({
		...container,
		colourChoice: container.colourChoice as Colour
	}));
</script>

<Generator projectContainers={processedProjectContainers}>
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
</Generator>
