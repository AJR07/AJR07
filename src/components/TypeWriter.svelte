<script lang="ts">
    import { inview } from 'svelte-inview';
    export let text: string;
    export let delay: number;

    let currentIdx = 0;
    let lastTime = 0;

    const appendText = (time: number) => {
        if (currentIdx < text.length) {
            if (time - lastTime >= delay) {
                currentIdx++;
                lastTime = time;
            }
            requestAnimationFrame(appendText);
        }
    };
</script>

<div use:inview="{{}}" on:inview_enter="{() => requestAnimationFrame(appendText)}">
    {#if text.length !== currentIdx}
        {text.slice(0, currentIdx) + '▮'}
    {:else}
        {text}
    {/if}
</div>