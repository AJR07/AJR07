<script lang="ts">
	import { inview } from 'svelte-inview';
	export let text: string;
	export let delay: number;

	let currentIdx = 0;

	const appendText = () => {
		if (currentIdx < text.length) {
			currentIdx++;
		}
		setTimeout(() => {
			appendText();
		}, delay);
	};
</script>

<div use:inview="{{}}" on:inview_enter="{appendText}">
	{#if text.length !== currentIdx}
		{text.slice(0, currentIdx) + '▮'}
	{:else}
		{text}
	{/if}
</div>
