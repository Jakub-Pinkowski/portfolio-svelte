<script lang="ts">
	import axios from 'axios';
	import { fade } from 'svelte/transition';

	import Button from '$lib/components/UI/Button.svelte';
	import contact from '$lib/assets/images/contact.jpg';

	import linkedin from '$lib/assets/icons/linkedin.png';
	import github from '$lib/assets/icons/github.png';

	let name: string;
	let email: string;
	let message: string;
	let toastSuccess: boolean = false;
	let toastError: boolean = false;
	let toastMessage: string;

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		const url = 'https://formspree.io/f/xpzgwgre';

		const data = {
			name,
			email,
			message
		};

		if (!name || !email || !message || !isValidEmail(email)) {
			toastMessage = 'Please fill out all fields correctly.';
			toastError = true;

			setTimeout(() => {
				toastSuccess = false;
				toastError = false;
			}, 2000);

			return;
		}

		try {
			const response = await axios.post(url, data);

			if (response.status === 200) {
				toastMessage = 'Message sent successfully!';
				toastSuccess = true;
				resetForm();
			} else {
				toastMessage = 'Something went wrong. Please try again later.';
				toastError = true;
				console.error('Unexpected response status:', response.status);
			}
		} catch (error) {
			toastMessage = 'Something went wrong. Please try again later.';
			toastError = true;
			console.error('Unexpected error:', error);
		}

		setTimeout(() => {
			toastSuccess = false;
			toastError = false;
		}, 2000);

		resetForm();
	};

	const resetForm = () => {
		name = '';
		email = '';
		message = '';
	};

	const isValidEmail = (value: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	};
</script>

<div class="mx-8 my-24">
	<h3 class="text-4xl uppercase text-main">Contact</h3>
	<div class="flex">
		<div class="my-8 w-3/5">
			<img src={contact} class="rounded-3xl" alt="" />
		</div>
		<div class=" m-8 w-2/5 px-8">
			<h4 class="text-2xl">Send me a message!</h4>
			<p class="my-8 text-xl">
				Feel free to reach out to me via the form or social media.
				<br />
				Looking forward to hearing from you!
			</p>
			<div class="my-6">
				<a href="https://www.linkedin.com/in/jakub-pinkowski-b44405134/">
					<img src={linkedin} class="mr-4 inline-block w-12" alt="linkedin" />
				</a>
				<a href="https://github.com/Jakub-Pinkowski">
					<img src={github} class="mr-4 inline-block w-12" alt="github" />
				</a>
			</div>
			<form on:submit={handleSubmit} class="mb-8 flex flex-col">
				<input
					bind:value={name}
					class="input input-bordered my-4 w-full max-w-xl"
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					required
					autocomplete="name"
				/>
				<input
					bind:value={email}
					class="input input-bordered my-4 w-full max-w-xl"
					type="text"
					name="email"
					id="email"
					placeholder="E-mail"
					required
					autocomplete="email"
				/>
				<textarea
					bind:value={message}
					class="textarea textarea-bordered my-4 w-full max-w-xl"
					cols="30"
					rows="5"
					name="message"
					id="message"
					placeholder="Message"
					required
				></textarea>
				<Button>Send</Button>
			</form>
		</div>
	</div>
</div>

{#if toastSuccess}
	<div class="toast toast-center toast-top" transition:fade>
		<div class="alert alert-success">
			<span>{toastMessage}</span>
		</div>
	</div>
{/if}

{#if toastError}
	<div class="toast toast-center toast-top" transition:fade>
		<div class="alert alert-error">
			<span>{toastMessage}</span>
		</div>
	</div>
{/if}
