import type { Metadata } from 'next';
import './globals.css';
import { Manrope } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { LenisProvider } from '@/components/effects/lenis-provider';

export const metadata: Metadata = {
	title: 'SpartaHack X',
	description:
		"SpartaHack X is Michigan State University's Official Hackathon.",
};

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-manrope',
	weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-grotesk',
});

const spaceMono = Space_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-mono',
	weight: ['400', '700'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r127/three.min.js" />
			</head>
			<body
				className={cn(
					manrope.variable,
					spaceGrotesk.variable,
					spaceMono.variable,
					'font-sans antialiased min-h-screen'
				)}>
				<LenisProvider>{children}</LenisProvider>
			</body>
		</html>
	);
}
