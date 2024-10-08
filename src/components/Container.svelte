<script lang="ts">
	import type { ProjectInfo } from "src/types/ProjectInfo";
	import Project from "./Project.svelte";

	export let projects: ProjectInfo[];
</script>

<div>
	{#each projects as projectInfo}
		<Project {projectInfo} />
	{/each}
</div>