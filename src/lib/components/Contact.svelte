<script lang="ts">
    import contact from '$lib/assets/images/contact.webp';
    import linkedin from '$lib/assets/icons/linkedin.png';
    import github from '$lib/assets/icons/github.png';
    import ContactForm from '$lib/components/Contact/ContactForm.svelte';
</script>

<section class="px-8 py-14 lg:py-24" id="contact">
    <h2 class="text-main text-4xl uppercase" id="contact-heading">Contact</h2>
    <div class="flex flex-col lg:flex-row">
        <figure class="my-8 w-full lg:w-3/5">
            <img
                    alt=""
                    aria-hidden="true"
                    class="rounded-3xl"
                    loading="lazy"
                    src={contact}
            />
        </figure>
        <article class="flex w-full flex-col gap-4 text-justify lg:m-8 lg:w-2/5 lg:px-8 2xl:gap-6">
            <h3 class="text-2xl">Send me a message!</h3>
            <p class="text-xl">
                Feel free to reach out to me via the form or social media.
                <br/>
                Looking forward to hearing from you!
            </p>
            <nav aria-label="Social media links">
                <a
                        aria-label="LinkedIn profile (opens in a new tab)"
                        class="mr-4 inline-block"
                        href="https://www.linkedin.com/in/jakub-pinkowski-b44405134/"
                        target="_blank"
                >
                    <img alt="linkedin" class="inline-block w-12" src={linkedin}/>
                </a>
                <a
                        aria-label="GitHub profile (opens in a new tab)"
                        class="mr-4 focus:ring-2 inline-block"
                        href="https://github.com/Jakub-Pinkowski"
                        target="_blank"
                >
                    <img alt="github" class=" inline-block w-12" src={github}/>
                </a>
            </nav>
            <ContactForm/>
        </article>
    </div>
</section>
