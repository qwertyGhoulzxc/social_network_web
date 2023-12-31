import { COLORS } from './src/constants/colors.constants';

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	// darkMode: 'class',
	theme: {
		extend: {
			colors: COLORS,
			fontFamily: {
				mono: ['Space Mono'],
				roboto: ['Roboto'],
			},
		},
	},
	plugins: [],
};
