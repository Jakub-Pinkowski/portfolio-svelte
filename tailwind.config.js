/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				main: '#950740',
				dark: '#6f2232',
				light: '#e0aeb5',
                superLight:'#fdd8e6',
				gray: '#4e4e50',
                lightGray: '#f5f5f5',
				darkGray: '#282829'
			},
			fontFamily: {
				custom: ['Montserrat', 'Work Sans', 'Open Sans', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					main: '#950740',
					gray: '#4e4e50',
					dark: '#6f2232'
				}
			}
		]
	}
};
