import Background from '@/components/effects/background';
import PublicHeader from '@/components/public-pages/public-header';
import TextLogo from '@/components/ui/text-logo';

function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<PublicHeader />
			<main className="min-h-screen px-4">{children}</main>
			<Background />
			{/* <footer>Footer</footer> */}
		</>
	);
}

export default HomeLayout;
