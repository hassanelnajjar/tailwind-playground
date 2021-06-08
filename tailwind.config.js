module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: () => ({
				'main-background-image': "url('/img/background.png')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
