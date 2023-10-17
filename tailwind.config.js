/** @type {import('tailwindcss').Config} */
const themeFieldsJson = require(`./src/fields.json`);

const getThemeFields = json => {
	const colors = json
		.find(item => item.name === "global_colors")
		?.children.reduce((acc, item) => {
			return {
				...acc,
				[item.name]: `var(--hs-color-${item.name})`,
			}
		}, {});

	const fontFamily = json
		.find(item => item.name === "global_fonts")
		?.children.reduce((acc, item) => {
			return {
				...acc,
				[item.name]: `var(--hs-fontfamily-${item.name})`
			};
		}, {});

	return {
		colors,
		fontFamily,
	};
};

const themeFields = getThemeFields(themeFieldsJson);

module.exports = {
  content: [
    './src/**/*.{html, css, js, jsx}'
  ],
  theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#FF4B40"
				},
				red: {
					"100": "#FFDDD9",
					"400": "#EF4E41",
					"500": "#FF4B40",
					"600": "#E6362E",
				},
				blue: {
					"700": "#022bff",
				},
				grey: {
					"100": "#F0F0F0",
					"200": "#DFDFDF",
					"300": "#B6B6B6"
				},
				purple: {
					"600": "#343760",
					"800": "#1D1E35",
					"900": "#141525"
				},
				...themeFields.colors
			},

			fontFamily: {
				...themeFields.fontFamily
			},
			fontSize: {
				"8xl": ["110px", "1"],
				"7xl": ["80px", "1.1"],
				"6xl": ["64px", "1.2"],
				"5xl": ["48px", "1.2"],
				"4xl": ["36px", "1.55"],
				"3xl": ["28px", "1.5"],
				"2xl": ["24px", "1.6"],
				xl: ["20px", "1.6"],
				lg: ["18px", "1.778"],
				base: ["16px", "1.75"],
				sm: ["14px", "1.429"],
				xs: ["12px", "1.5"],
			},
			maxWidth: {
				"1/2": "50%",
				"3/4": "75%"
			},
			gap: {
				"theme-col-gap": "var(--column-gap)"
			}
		}
  },
  plugins: [
		require('tailwind-bootstrap-grid')({
			generateContainer: false
		}),
    require('@tailwindcss/typography'),
	],
}
