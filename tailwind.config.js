/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				main: '#950740', // Dark red
				dark: '#6f2232', // Darker red
				light: '#e0aeb5', // Light pink
                superLight:'#fdd8e6', // Super light pink
				gray: '#4e4e50', // Gray
                lightGray: '#f5f5f5', // Light gray
				darkGray: '#282829' // Dark gray
			},
			fontFamily: {
				custom: ['Montserrat', 'Work Sans', 'Open Sans', 'sans-serif']
			}
		}
	},
};
