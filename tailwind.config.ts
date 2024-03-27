import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				sm: "425px",
				md: "750px",
				lg: "960px",
				xlg: "1280px",
				"2xlg": "1440px",
			},
			fontSize: {
				sm: "1.4rem",
				base: "1.6rem",
				md: "1.8rem",
				l: "2.2rem",
				xl: "3.2rem",
				"2xl": "4.4rem",
				"3xl": "4.8rem",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
