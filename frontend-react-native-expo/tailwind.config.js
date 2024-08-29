/** @type {import('tailwindcss').Config} */
module.exports = {  
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: '#161622',
			}
		},
	},
	// plugins: [],
};