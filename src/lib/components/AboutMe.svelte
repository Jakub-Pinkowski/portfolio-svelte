<script lang="ts">
	import me from '$lib/assets/images/me_cropped.jpg';
	import Button from '$lib/components/UI/Button.svelte';
</script>

<!-- TODO: Add more text -->
<div id="about-me" class="mx-8 my-24 flex flex-col md:flex-row">
	<div class="w-full text-justify md:w-1/2">
		<h3 class="text-4xl uppercase text-main">About Me</h3>
		<h5 class="my-8 text-xl text-darkGray">Hello World!</h5>
		<p class="my-8 text-xl text-darkGray">
			I'm Jakub, a self-taught web developer with a genuine passion for programming. I have a strong
			background in both front-end and back-end development, enabling me to create comprehensive and
			dynamic web applications.
		</p>
		<p class="my-8 text-xl text-darkGray">
			Welcome to my personal portfolio, where you can explore my projects and dedication to creating
			high-quality software solutions.
		</p>
		<!-- <p class="my-8 text-xl text-darkGray">
			I create and maintain websites for small business. You can find my full portfolio of both
			websites and fullstack projects below.
		</p> -->
		<!-- <p class="my-8 text-xl text-darkGray">
			If you are interested in website for your business, please contact me via this contact form
		</p> -->
		<!-- <a href="#contact">
			<Button>Contact me</Button>
		</a> -->
	</div>
	<div class="w-full md:mx-16 md:w-1/2">
		<figure>
			<img class=" rounded-3xl" src={me} alt="me" />
		</figure>
	</div>
</div>
