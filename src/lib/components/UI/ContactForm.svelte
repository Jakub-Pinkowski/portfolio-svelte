<script lang="ts">
	import axios from 'axios';
	import { fade } from 'svelte/transition';

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

<form on:submit={handleSubmit} class="flex flex-col gap-4 2xl:gap-6">
	<input
		bind:value={name}
		class="text-md input input-bordered w-full max-w-xl"
		type="text"
		name="name"
		id="name"
		placeholder="Name"
		required
		autocomplete="name"
	/>
	<input
		bind:value={email}
		class="text-md input input-bordered w-full max-w-xl"
		type="text"
		name="email"
		id="email"
		placeholder="E-mail"
		required
		autocomplete="email"
	/>
	<textarea
		bind:value={message}
		class="text-md textarea textarea-bordered w-full max-w-xl"
		cols="30"
		rows="4"
		name="message"
		id="message"
		placeholder="Message"
		required
	></textarea>
	<button class="my-button !px-4 !py-2 text-xl">Send</button>

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
</form>
