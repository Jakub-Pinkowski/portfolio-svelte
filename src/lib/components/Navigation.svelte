<script lang="ts">
    import {Hamburger} from 'svelte-hamburgers';
    import {fly, scale} from 'svelte/transition';
    import {quadOut} from 'svelte/easing';

    let open: boolean = $state(false);
    let menuId = "main-menu";

    interface Link {
        label: string;
        path: string;
    }

    const links: Link[] = [
        {label: 'Home', path: '/'},
        {label: 'About Me', path: '#about-me'},
        {label: 'Portfolio', path: '#portfolio'},
        {label: 'Contact', path: '#contact'}
    ];

    const closeMenu = () => {
        open = false;
    };
</script>

<!-- TODO: Add smooth hover underline animation-->
<nav aria-label="Main Navigation" class="fixed top-10 right-10 z-20">
    <Hamburger
            --color="#950740"
            ariaControls={menuId}
            ariaLabel="Toggle navigation menu"
            bind:open
    />
</nav>

{#if open}
    <div
            id={menuId}
            role="navigation"
            class="bg-dark-gray text-light fixed inset-x-0 top-0 z-10"
            transition:fly={{ y: -100, duration: 500, easing: quadOut }}
    >
        <div class="flex flex-col items-center text-3xl tracking-wide">
            {#each links as {label, path}}
                <a
                        href={path}
                        class="cursor-pointer p-4 hover:underline"
                        onclick={closeMenu}
                >
                    {label}
                </a>
            {/each}
        </div>


        <hr
                class="mx-auto w-full border-t-2 lg:w-1/3"
                in:scale={{ duration: 500, easing: quadOut, opacity: 1 }}
                out:scale={{ duration: 500, easing: quadOut, opacity: 0 }}
        />
    </div>
{/if}
