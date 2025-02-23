<script>
	import './app.css';
	import Router from 'svelte-spa-router';
	import Home from './pages/Home.svelte';
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import NotFound from './pages/NotFound.svelte';

	const routes = {
		'/': Home,
		'/resume': Home,
		'*': NotFound
	};
</script>

<main class="bg-black text-white w-svw overflow-hidden">
	<Navbar />
	<Router {routes} />
	<Footer />
</main>
