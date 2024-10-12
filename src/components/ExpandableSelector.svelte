<script lang="ts">
	export let text;
</script>

<!-- When hovering over the button, it shows the full name with a background -->
<!-- When at that section, the button becomes solid and white -->

<button class="border-2 border-dashed border-gray-400 rounded-full h-8 w-8 text-center">
	{text[0]}
</button>