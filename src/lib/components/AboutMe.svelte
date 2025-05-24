<script lang="ts">
    import me from '$lib/assets/images/me_cropped.webp';
</script>

<section class="flex flex-col px-8 py-14 lg:flex-row lg:py-24" id="about-me">
    <article class="w-full lg:w-1/2">
        <h2 class="text-main text-4xl uppercase" id="about-me-heading">About Me</h2>
        <h3 class="text-dark-gray my-8 text-xl">Hello World!</h3>
        <p class="text-dark-gray my-8 text-xl">
            I'm Jakub, a web developer with a passion for programming. My expertise spans frontend
            technologies such as TypeScript, JavaScript, HTML, CSS, and jQuery, as well as advanced
            frameworks like React, Vue and Svelte. I have hands-on experience with template engines like
            Apache Velocity and API querying using GraphQL. On top of that I have a solid understanding of
            backend technologies like Node.js, Python (Flask/Django included), SQL, Firebase and AWS.
        </p>
        <p class="text-dark-gray my-8 text-xl">
            Welcome to my personal portfolio, where you can explore my projects and dedication to creating
            high-quality software solutions.
        </p>
    </article>
    <aside class="w-full lg:mx-16 lg:w-1/2">
        <figure>
            <img
                    alt="Portrait of Jakub Pinkowski"
                    class="rounded-3xl"
                    src={me}
            />
        </figure>
    </aside>
</section>
