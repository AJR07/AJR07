<script>
	import './app.css';
	import Router from 'svelte-spa-router';
	import Home from './pages/Home.svelte';
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import NotFound from './pages/NotFound.svelte';
	import Projects from './pages/Projects.svelte';
	import Resume from './pages/Resume.svelte';

	const routes = {
		'/': Home,
		'/projects': Projects,
		'/resume': Resume,
		'*': NotFound
	};
</script>

<main class="bg-black text-white">
	<Navbar />
	<Router {routes} />
	<Footer />
</main>
