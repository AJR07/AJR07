<script lang="ts">
	export let color = '#ffffff';
	export let size = '200px';
	export let top: string | null = null;
	export let left: string | null = null;
	export let right: string | null = null;
	export let bottom: string | null = null;
</script>

<div
	id="glow-blob"
	class="absolute blur-3xl filter opacity-20 rounded-full"
	style:background-color="{color}"
	style:width="{size}"
	style:height="{size}"
	style:top="{top}"
	style:left="{left}"
	style:right="{right}"
	style:bottom="{bottom}"
></div>
