<script lang="ts">
	export let text: string;

	const checkBoundingBoxes = (): boolean => {
		let container = document.getElementById(text);
		let button = document.getElementById(`${text}-button`);
		if (container && button) {
			let rect = container.getBoundingClientRect();

			if (rect.top <= window.innerHeight && rect.bottom >= 0) {
				return true;
			} else {
				return false;
			}
		}
		return false;
	}

	let displayText = text[0],
		running = false,
		internallyFocused = checkBoundingBoxes();

	const addToText = () => {
		if (displayText.length >= text.length) {
			running = false;
			return;
		}

		setTimeout(() => {
			if (!running) return;
			displayText = displayText + text[displayText.length];
			addToText();
		}, 50);
	};

	const onMouseOver = () => {
		displayText = text[0];
		if (running) return;
		running = true;
		addToText();
	};

	const onMouseLeave = () => {
		displayText = text[0];
		running = false;
	};

	const onClick = () => {
		let container = document.getElementById(text);
		container?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
	};

	addEventListener('scroll', () => internallyFocused = checkBoundingBoxes());
</script>

<!-- When hovering over the button, it shows the full name with a background -->
<!-- When at that section, the button becomes solid and white -->

<button
	id="{`${text}-button`}"
	class="{`h-8 w-8 text-nowrap rounded-full border-2 text-center hover:w-min hover:bg-gray-800 hover:px-4 focus:border-solid focus:border-white ${internallyFocused ? 'border-solid border-white' : 'border-dashed border-gray-400'}`}"
	on:mouseenter="{onMouseOver}"
	on:mouseleave="{onMouseLeave}"
	on:click="{onClick}"
>
	{displayText}
</button>
