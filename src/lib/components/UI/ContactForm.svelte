<script lang="ts">
	import axios from 'axios';
	import { fade } from 'svelte/transition';

	let name: string = $state('');
	let email: string = $state('');
	let message: string = $state('');
	let toastSuccess: boolean = $state(false);
	let toastError: boolean = $state(false);
	let toastMessage: string = $state('');

	let nameError: string = $state('');
	let emailError: string = $state('');
	let messageError: string = $state('');

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		const url = 'https://formspree.io/f/xpzgwgre';

		const data = {
			name,
			email,
			message
		};

		resetErrors();

		let hasError = false;

		if (!name) {
			nameError = 'Name is required.';
			hasError = true;
		}

		if (!email) {
			emailError = 'Email is required.';
			hasError = true;
		} else if (!isValidEmail(email)) {
			emailError = 'Please enter a valid email address.';
			hasError = true;
		}

		if (!message) {
			messageError = 'Message is required.';
			hasError = true;
		}

		if (hasError) {
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

	const resetErrors = () => {
		nameError = '';
		emailError = '';
		messageError = '';
	};

	const isValidEmail = (value: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	};
</script>

<form onsubmit={handleSubmit} class="flex flex-col gap-4 2xl:gap-6">
	<div>
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
		{#if nameError}
			<p class="mt-2 text-sm text-red-500">{nameError}</p>
		{/if}
	</div>
	<div>
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
		{#if emailError}
			<p class=" mt-2 text-sm text-red-500">{emailError}</p>
		{/if}
	</div>
	<div>
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
		{#if messageError}
			<p class=" mt-2text-sm text-red-500">{messageError}</p>
		{/if}
	</div>
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
