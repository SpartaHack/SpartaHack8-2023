import "./globals.css";
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
    default: "YouLearn - AI companion for learning",
    template: "%s - Learn, Share, Collaborate.",
  },
  description:
    "YouLearn is reimagining the future of learning by building AI software for students, teachers, and communities to democratize quality education worldwide.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: [{ url: "https://dev.youlearn.ai/opengraph-image.png" }],
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
