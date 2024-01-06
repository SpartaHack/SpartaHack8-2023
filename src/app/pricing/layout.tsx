import { ThemeProviders } from "@/providers/theme-providers";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "YouLearn Pricing",
    template: "%s - Learn, Share, Collaborate.",
  },
  description:
    "YouLearn is reimagining the future of learning by building AI software for students, teachers, and communities to democratize quality education worldwide.",
  metadataBase: new URL("https://app.youlearn.ai"),
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProviders>
          <Toaster richColors />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
