<script>
	import './app.css';
	import Footer from './components/Footer.svelte';
	import Navbar from './components/Navbar.svelte';
</script>

<main class="h-svh bg-black text-white">
	<Navbar />
	<div id="main-content-container" class="relative z-10 flex flex-col items-center">
		<img id="profile-picture" src="AJR.png" alt="AJR-profile" class="-mb-[7.5%] -mt-[5%] w-3/4" />
		<h1
			id="header"
			class="bg-gradient-to-r from-[#8eff65] to-[#1fd6ff] !bg-clip-text text-center text-[5vw] font-bold text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
		>
			HALLOOOOOOOOO!
		</h1>
		<div>
			<a
				class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
				>Badge</a
			>
			<a
				class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
			>
				Badge
			</a>
		</div>
	</div>
	<Footer />
</main>

<style></style>
