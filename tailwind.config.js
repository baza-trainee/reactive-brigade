/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'goal-image': "url('/src/assets/progressBar/bg-image.jpg')",
			},
		},
	},
	plugins: [],
};
