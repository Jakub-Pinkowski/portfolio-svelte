<script lang="ts">
    import contact from '$lib/assets/images/contact.jpg';
    import linkedin from '$lib/assets/icons/linkedin.png';
    import github from '$lib/assets/icons/github.png';
    import ContactForm from '$lib/components/Contact/ContactForm.svelte';
</script>

<div id="contact" class="mx-8 my-24">
    <h3 class="text-4xl uppercase text-main">Contact</h3>
    <div class="flex flex-col md:flex-row">
        <div class="my-8 w-full md:w-3/5">
            <img src={contact} class="rounded-3xl" alt="" />
        </div>
        <div class="flex w-full flex-col gap-4 text-justify md:m-8 md:w-2/5 md:px-8 2xl:gap-6">
            <h4 class="text-2xl">Send me a message!</h4>
            <p class="text-xl">
                Feel free to reach out to me via the form or social media.
                <br />
                Looking forward to hearing from you!
            </p>
            <div class="">
                <a href="https://www.linkedin.com/in/jakub-pinkowski-b44405134/">
                    <img src={linkedin} class="mr-4 inline-block w-12" alt="linkedin" />
                </a>
                <a href="https://github.com/Jakub-Pinkowski">
                    <img src={github} class="mr-4 inline-block w-12" alt="github" />
                </a>
            </div>
            <ContactForm />
        </div>
    </div>
</div>