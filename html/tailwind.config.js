/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
			colors: {
				primary: {
					50: '#edfcf3',
					100: '#d3f8e0',
					200: '#abefc8',
					300: '#74e1a9',
					400: '#52d193',
					500: '#18b16b',
					600: '#0c8f56',
					700: '#0a7248',
					800: '#0a5b3a',
					900: '#0a4a31',
					950: '#042a1c'
				}
			}
		}
  },
  plugins: [require('flowbite/plugin')],
}

