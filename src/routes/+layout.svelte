<script lang="ts">
    import '../app.css';
    import Navigation from '$lib/components/Navigation.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>
<Navigation/>
<main id="main-content" tabindex="-1">
    <slot/>
</main>

<Footer/>

<style>
    .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--color-main);
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 100;
        border-radius: 0 0 4px 0;
    }

    .skip-link:focus {
        top: 0;
    }
</style>
