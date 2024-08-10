<script lang="ts">
	import me from '$lib/assets/images/me_cropped.jpg';
</script>

<div id="about-me" class="mx-8 my-24 flex flex-col md:flex-row">
	<div class="w-full text-justify md:w-1/2">
		<h3 class="text-4xl uppercase text-main">About Me</h3>
		<h5 class="my-8 text-xl text-darkGray">Hello World!</h5>
		<p class="my-8 text-xl text-darkGray">
			I'm Jakub, a web developer with a passion for programming. My expertise spans frontend
			technologies such as HTML, CSS, JavaScript, and jQuery, as well as advanced frameworks like
			React, Vue and Svelte. I have hands-on experience with template engines like Apache Velocity
			and API querying using GraphQL. On top of that I have a solid understanding of backend
			technologies like Node.js, Python (Flask/Django), SQL, Firebase and AWS.
		</p>
		<p class="my-8 text-xl text-darkGray">
			Welcome to my personal portfolio, where you can explore my projects and dedication to creating
			high-quality software solutions.
		</p>
	</div>
	<div class="w-full md:mx-16 md:w-1/2">
		<figure>
			<img class=" rounded-3xl" src={me} alt="me" />
		</figure>
	</div>
</div>
