<script lang="ts">
	import Container from "../components/Container.svelte";
</script>

<div id="container" class="mb-16">
	<div id="main" class="flex min-h-svh flex-col">
		<h1
			id="header"
			class="mt-16 bg-gradient-to-r from-[#ff2020] to-[#fff700] !bg-clip-text text-center text-[5vw] font-bold text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
		>
			PROJECTS
		</h1>
		<div >
			<Container projects={[{
				title: "Goose",
				description: "Wobble",
				createdAt: new Date ("2021-09-01"),
				lastUpdated: new Date ("2021-09-01"),
			}]} />
		</div>
	</div>
</div>
