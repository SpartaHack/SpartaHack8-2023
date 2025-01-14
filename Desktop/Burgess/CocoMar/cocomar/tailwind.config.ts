import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['bc-novatica-cyr', 'sans-serif'],
				serif: ['new-kansas'],
			},
			colors: {
				'coco-blue-light': '#5BADEC',
				'coco-blue-medium': '#4483CB',
				'coco-blue-dark': '#2D72B5',
				'coco-violet-light': '#9061D3',
				'coco-violet-medium': '#492663',
				'coco-violet-dark': '#351A4C',
				'coco-purple-light': '#BE45C1',
				'coco-purple-medium': '#A626A9',
				'coco-purple-dark': '#86138C',
				'coco-green-light': '#008A65',
				'coco-green-medium': '#006F4E',
				'coco-green-dark': '#01563A',
				'coco-yellow': '#F1AF00',
				'coco-orange-light': '#FF7200',
				'coco-orange-dark': '#FF4800',
			},
		},
	},
	plugins: [],
};
export default config;
