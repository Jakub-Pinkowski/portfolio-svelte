<script lang="ts">
    import axios from 'axios';
    import {fade} from 'svelte/transition';

    let isSubmitting = $state(false);

    // Form data
    let formData = $state({
        name: '',
        email: '',
        message: ''
    });

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

        if (isSubmitting) return;
        isSubmitting = true;

        resetErrors();
        if (!validateForm()) {
            showToast('Please fill out all fields correctly.', 'error');
            isSubmitting = false;
            return;
        }

        const url = 'https://formspree.io/f/xpzgwgre';

        try {
            const response = await axios.post(url, formData);

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
    };

    const validateForm = () => {
        let isValid = true;

        if (!formData.name) {
            errors.name = 'Name is required.';
            isValid = false;
        }

        if (!formData.email) {
            errors.email = 'Email is required.';
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            errors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!formData.message) {
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
        errors = {
            name: '',
            email: '',
            message: ''
        };
    };

    const showToast = (message: string, type: 'success' | 'error') => {
        toast = {message, type, visible: true};
        setTimeout(() => (toast.visible = false), 2000);
    };

    const resetForm = () => {
        formData = {
            name: '',
            email: '',
            message: ''
        };
    };
</script>

<form class="flex flex-col gap-4 2xl:gap-6" onsubmit={handleSubmit}>
    <!-- Name Field -->
    <div>
        <label class="sr-only" for="name">Name</label>
        <input
                autocomplete="name"
                bind:value={formData.name}
                class="input input-bordered w-full max-w-xl text-lg"
                id="name"
                name="name"
                placeholder="Name"
                required
                type="text"
        />
        {#if errors.name}
            <p id="name-error" class="mt-2 text-sm text-red-500" role="alert">{errors.name}</p>
        {/if}
    </div>

    <!-- Email Field -->
    <div>
        <label class="sr-only" for="email">Email</label>
        <input
                autocomplete="email"
                bind:value={formData.email}
                class="input input-bordered w-full max-w-xl text-lg"
                id="email"
                name="email"
                placeholder="Email"
                required
                type="email"
        />
        {#if errors.email}
            <p id="email-error" class="mt-2 text-sm text-red-500" role="alert">{errors.email}</p>
        {/if}
    </div>

    <!-- Message Field -->
    <div>
        <label class="sr-only" for="message">Message</label>
        <textarea
                bind:value={formData.message}
                class="textarea textarea-bordered w-full max-w-xl text-lg"
                cols="30"
                id="message"
                name="message"
                placeholder="Message"
                required
                rows="4"
        ></textarea>
        {#if errors.message}
            <p id="message-error" class="mt-2 text-sm text-red-500" role="alert">{errors.message}</p>
        {/if}
    </div>

    <!-- Form Errors Summary (hidden but available to screen readers) -->
    <div aria-live="polite" class="sr-only" id="form-errors">
        {#if errors.name || errors.email || errors.message}
            Please correct the following errors:
            {#if errors.name}Name: {errors.name}{/if}
            {#if errors.email}Email: {errors.email}{/if}
            {#if errors.message}Message: {errors.message}{/if}
        {/if}
    </div>

    <!-- Submit Button -->
    <button
            aria-busy={isSubmitting}
            class="my-button flex items-center px-4! py-2! text-xl"
            disabled={isSubmitting}
    >
        {#if isSubmitting}
            Sending <span class="loading loading-spinner loading-md ml-2" aria-hidden="true"></span>
        {:else}
            Send
        {/if}
    </button>

    <!-- Toast Notification -->
    {#if toast.visible}
        <div class="toast toast-center toast-top" transition:fade role="alert" aria-live="assertive">
            <div class={`alert alert-${toast.type}`}>
                <span>{toast.message}</span>
            </div>
        </div>
    {/if}
</form>
