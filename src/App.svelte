<script>
	import './app.css';
	import Router from 'svelte-spa-router';
	import Home from './pages/Home.svelte';
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Projects from './pages/projects/Projects.svelte';
	import NotFound from './pages/NotFound.svelte';

	const routes = {
		'/': Home,
		'/projects': Projects,
		'*': NotFound
	};
</script>

<main class="bg-black text-white">
	<Navbar />
	<Router {routes} />
	<Footer />
</main>
