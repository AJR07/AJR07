<script lang="ts">
    import ExpandableSelector from '../../components/ExpandableSelector.svelte';
    import type { ContainerInfo } from '../../types/ContainerInfo';
    export let projectContainer: ContainerInfo[];

    let containerTitles = projectContainer.map((container) => container.title);

	// Sidebar Scrollbar Fixing
    let sidebarElement: HTMLElement;
    let isFixed = false;

    const handleScroll = () => {
        if (sidebarElement.offsetTop && window.scrollY > sidebarElement.offsetTop) {
            isFixed = true;
        } else {
            isFixed = false;
        }
    };

    $: {
        window.addEventListener('scroll', handleScroll);
    }
</script>

<style>
    .fixed {
        position: fixed;
        top: 0;
    }
    .absolute {
        position: absolute;
    }
</style>

<span bind:this={sidebarElement} id="sidebar-sample" class="absolute ml-4 mx-4 pt-4 w-20"/>

<div id="sidebar" class="z-20 mx-3 pt-4 flex w-20 h-full flex-col" class:absolute={!isFixed} class:fixed={isFixed}>
    {#each containerTitles as title}
        <ExpandableSelector text={title} />
        {#if containerTitles.at(-1) !== title}
            <div class="w-0 ml-4 border border-dashed border-gray-400 flex-1 max-h-20"></div>
        {/if}
    {/each}
</div>