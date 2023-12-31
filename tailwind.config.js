/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				main: '#950740',
				dark: '#6f2232',
				light: '#e0aeb5',
				gray: '#4e4e50'
			},
			fontFamily: {
				custom: ['Montserrat', 'Work Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
