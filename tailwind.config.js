/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#166432",
				secondary: "#092415",
				btn_color: "#B17030",
				text_color: "#815223",
			},
		},
	},
	plugins: [],
};
