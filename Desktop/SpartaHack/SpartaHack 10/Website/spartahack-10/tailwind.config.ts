import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				sans: ['var(--font-manrope)', ...fontFamily.sans],
				grotesk: ['var(--font-space-grotesk)', ...fontFamily.sans],
				mono: ['var(--font-space-mono)', ...fontFamily.mono],
			},
		},
	},
	plugins: [],
};
export default config;
