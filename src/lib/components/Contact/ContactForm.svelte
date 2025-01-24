<script lang="ts">
    import axios from 'axios';
    import {fade} from 'svelte/transition';

    let isSubmitting = $state(false);

    // Form data
    let name: string = $state('');
    let email: string = $state('');
    let message: string = $state('');

    // Errors
    let errors = $state({
        name: '',
        email: '',
        message: ''
    });

    // Toast
    let toast = $state({
        message: '',
        type: '',
        visible: false
    });

    const handleSubmit = async (event: Event) => {
        event.preventDefault();

        if (isSubmitting) return; // Prevent multiple submissions
        isSubmitting = true;

        resetErrors();
        if (!validateForm()) {
            showToast('Please fill out all fields correctly.', 'error');
            return;
        }

        const url = 'https://formspree.io/f/xpzgwgre';
        const data = {name, email, message};


        try {
            const response = await axios.post(url, data);

            if (response.status === 200) {
                showToast('Message sent successfully!', 'success');
                resetForm();
            } else {
                showToast('Something went wrong. Please try again later.', 'error');
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            showToast('Something went wrong. Please try again later.', 'error');
            console.error('Unexpected error:', error);
        } finally {
            isSubmitting = false;
        }

        resetForm();
    };

    const validateForm = () => {
        let isValid = true;

        if (!name) {
            errors.name = 'Name is required.';
            isValid = false;
        }

        if (!email) {
            errors.email = 'Email is required.';
            isValid = false;
        } else if (!isValidEmail(email)) {
            errors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!message) {
            errors.message = 'Message is required.';
            isValid = false;
        }

        return isValid;
    };

    const isValidEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const resetErrors = () => {
        errors = {name: '', email: '', message: ''};
    };

    const showToast = (message: string, type: 'success' | 'error') => {
        toast = {message, type, visible: true};
        setTimeout(() => (toast.visible = false), 2000);
    };

    const resetForm = () => {
        name = '';
        email = '';
        message = '';
    };


</script>

<form onsubmit={handleSubmit} class="flex flex-col gap-4 2xl:gap-6">
    <div>
        <input
                bind:value={name}
                class="input input-bordered w-full max-w-xl text-lg"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                autocomplete="name"
        />
        {#if errors.name}
            <p class="mt-2 text-sm text-red-500">{errors.name}</p>
        {/if}
    </div>
    <div>
        <input
                bind:value={email}
                class="input input-bordered w-full max-w-xl text-lg "
                type="text"
                name="email"
                id="email"
                placeholder="E-mail"
                required
                autocomplete="email"
        />
        {#if errors.email}
            <p class=" mt-2 text-sm text-red-500">{errors.email}</p>
        {/if}
    </div>
    <div>
		<textarea
                bind:value={message}
                class="textarea textarea-bordered w-full max-w-xl text-lg"
                cols="30"
                rows="4"
                name="message"
                id="message"
                placeholder="Message"
                required
        ></textarea>
        {#if errors.message}
            <p class=" mt-2text-sm text-red-500">{errors.message}</p>
        {/if}
    </div>
    <button class="my-button px-4! py-2! text-xl" disabled={isSubmitting}>
        {isSubmitting ? 'Sending' : 'Send'}
    </button>

    {#if toast.visible}
        <div class="toast toast-center toast-top" transition:fade>
            <div class={`alert alert-${toast.type}`}>
                <span>{toast.message}</span>
            </div>
        </div>
    {/if}
</form>
