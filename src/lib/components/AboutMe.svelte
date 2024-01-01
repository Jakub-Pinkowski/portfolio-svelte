<script lang="ts">
	import me from '$lib/assets/images/me_cropped.jpg';
</script>

<!-- TODO: Add more text -->
<div class="my-24 ml-8 flex md:ml-24">
	<div class="w-1/2 text-justify">
		<h3 class="text-3xl uppercase text-main">About Me</h3>
		<h5 class="text-darkGray my-8 text-xl">Hello World!</h5>
		<p class="text-darkGray my-8 text-xl">
			I'm Jakub, a self-taught web developer with a genuine passion for programming. I have a strong
			background in both front-end and back-end development, enabling me to create comprehensive and
			dynamic web applications.
		</p>
		<p class="text-darkGray my-8 text-xl">
			I create and maintain websites for small business. You can find my full portfolio below.
		</p>
	</div>
	<div class="mx-16 w-1/2">
		<figure>
			<img class=" rounded-3xl" src={me} alt="me" />
		</figure>
	</div>
</div>
