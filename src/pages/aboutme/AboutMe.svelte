<script>
	import TypeWriter from '../../components/TypeWriter.svelte';
import GHStats from './GHStats.svelte';
	import TechStack from './TechStack.svelte';
</script>

<div id="about-me" class="m-4 font-mono">
	<p class="text-lg">
		<TypeWriter text="👋 Hi! I am a random guy who loves trying random
		stuff on his computer :) I also happen to like planes ✈️" delay={50} />
	</p>
	<TechStack />
	<GHStats />
</div>
