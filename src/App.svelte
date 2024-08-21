<script>
	import './app.css';
	import Footer from './components/Footer.svelte';
	import Navbar from './components/Navbar.svelte';
</script>

<main class="h-svh bg-black text-white">
	<Navbar />
	<div
		id="main-content-container"
		class="relative z-10 flex flex-col items-center"
	>
		<img
			id="profile-picture"
			src="AJR.png"
			alt="AJR-profile"
			class="-mb-[7.5%] -mt-[5%] w-3/4"
		/>
		<h1
			id="header"
			class="bg-gradient-to-r from-[#8eff65] to-[#1fd6ff] !bg-clip-text text-center text-[5vw] font-bold text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
		>
			HALLOOOOOOOOO!
		</h1>
		<div>
			<a class="px-5 text-[3vw] font-bold hover:underline" href="#about-me">
				About Me
			</a>
			<span class="mx-10 text-[3vw] font-bold"> • </span>
			<a class="px-5 text-[3vw] font-bold hover:underline" href="/projects">
				Projects
			</a>
		</div>
	</div>
	<Footer />
</main>

<style></style>
