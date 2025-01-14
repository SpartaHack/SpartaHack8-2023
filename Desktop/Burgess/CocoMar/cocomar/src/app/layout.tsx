import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
	title: 'CocoMar',
	description: 'Refreshing Protein Drinks',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/rnu0ede.css"></link>
			</head>
			<body className={`font-serif antialiased min-h-screen`}>{children}</body>
		</html>
	);
}
