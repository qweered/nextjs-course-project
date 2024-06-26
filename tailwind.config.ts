import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				green: '#35B8BE',
				'hero-bgc': '#F5FBFC',
				'gray-description': '#546285',
				accent: '#08090A',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				sans: ['var(--font-inter-sans)'],
				mono: ['var(--font-inter-mono)'],
			},
		},
	},
	plugins: [],
}
export default config
