<script lang="ts">
    import contact from '$lib/assets/images/contact.webp';
    import linkedin from '$lib/assets/icons/linkedin.png';
    import github from '$lib/assets/icons/github.png';
    import ContactForm from '$lib/components/Contact/ContactForm.svelte';
</script>

<section class="px-8 py-14 lg:py-24" id="contact" aria-labelledby="contact-heading">
    <h2 id="contact-heading" class="text-main text-4xl uppercase">Contact</h2>
    <div class="flex flex-col lg:flex-row">
        <div class="my-8 w-full lg:w-3/5">
            <img 
                alt="" 
                class="rounded-3xl" 
                src={contact}
                aria-hidden="true"
            />
        </div>
        <div class="flex w-full flex-col gap-4 text-justify lg:m-8 lg:w-2/5 lg:px-8 2xl:gap-6">
            <h3 class="text-2xl">Send me a message!</h3>
            <p class="text-xl">
                Feel free to reach out to me via the form or social media.
                <br/>
                Looking forward to hearing from you!
            </p>
            <div aria-label="Social media links">
                <a 
                    href="https://www.linkedin.com/in/jakub-pinkowski-b44405134/" 
                    target="_blank"
                    aria-label="LinkedIn profile (opens in a new tab)"
                    class="mr-4 inline-block"
                >
                    <img alt="linkedin" class="inline-block w-12" src={linkedin}/>
                </a>
                <a 
                    href="https://github.com/Jakub-Pinkowski" 
                    target="_blank"
                    aria-label="GitHub profile (opens in a new tab)"
                    class="mr-4 focus:ring-2 inline-block"
                >
                    <img alt="github" class=" inline-block w-12" src={github}/>
                </a>
            </div>
            <ContactForm/>
        </div>
    </div>
</section>
