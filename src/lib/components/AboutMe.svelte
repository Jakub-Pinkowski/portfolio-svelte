<script lang="ts">
    import me from '$lib/assets/images/me_cropped.webp';
</script>

<div id="about-me" class="mx-8 my-14 flex flex-col md:flex-row md:my-24">
    <div class="w-full text-justify md:w-1/2">
        <h2 class="text-4xl uppercase text-main">About Me</h2>
        <h3 class="my-8 text-xl text-dark-gray">Hello World!</h3>
        <p class="my-8 text-xl text-dark-gray">
            I'm Jakub, a web developer with a passion for programming. My expertise spans frontend
            technologies such TypeScript, JavaScript, HTML, CSS, and jQuery, as well as advanced
            frameworks like React, Vue and Svelte. I have hands-on experience with template engines like
            Apache Velocity and API querying using GraphQL. On top of that I have a solid understanding of
            backend technologies like Node.js, Python (Flask/Django included), SQL, Firebase and AWS.
        </p>
        <p class="my-8 text-xl text-dark-gray">
            Welcome to my personal portfolio, where you can explore my projects and dedication to creating
            high-quality software solutions.
        </p>
    </div>
    <div class="w-full md:mx-16 md:w-1/2">
        <figure>
            <img class="rounded-3xl" src={me} alt="me"/>
        </figure>
    </div>
</div>
