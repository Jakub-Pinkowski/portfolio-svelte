<script lang="ts">
    import '../app.css';
    import Navigation from '$lib/components/Navigation.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Navigation/>
<main id="main-content">
    <slot/>
</main>

<Footer/>
